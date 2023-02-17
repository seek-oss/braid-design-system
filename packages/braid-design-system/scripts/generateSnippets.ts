/* eslint-disable no-console */
import prettier from 'prettier';
import fs from 'fs-extra';
import glob from 'fast-glob';
import path from 'path';
import dedent from 'dedent';
import { transformFileAsync as babelTransform } from '@babel/core';

import { relativeTo } from './utils';

const baseDir = path.join(__dirname, '..');
const componentsDir = path.join(baseDir, 'src/lib/components');
const snippetsDir = path.join(baseDir, 'src/lib/playroom/snippets');
const snippetsIndexFile = path.join(baseDir, 'src/lib/playroom/snippets.ts');

const relativeToProject = (p: string) => path.relative(baseDir, p);
const removeExtension = (p: string) => p.replace(path.extname(p), '');
const transformWithBabel = async (fileName: string) => {
  const result = await babelTransform(fileName, {
    plugins: [
      [require.resolve('babel-plugin-transform-remove-imports'), { removeAll: true }],
      [require.resolve('babel-plugin-macros'), { source: { codeOnly: true } }],
      [require.resolve('@babel/plugin-transform-typescript'), { isTSX: true }],
    ],
    babelrc: false,
    configFile: false,
  });

  if (!result?.code) {
    throw new Error(`No result from Babel transform of ${relativeToProject(fileName)}`);
  }

  return result.code;
};

(async () => {
  const snippetPaths = await glob('**/*.snippets.tsx', {
    cwd: componentsDir,
    absolute: true,
    onlyFiles: true,
  });

  await fs.emptyDir(snippetsDir);

  const snippets = (
    await Promise.all(
      snippetPaths.map(async (snippetPath) => {
        const transformedSnippetCode = await transformWithBabel(snippetPath);
        const transformedSnippetPath = path
          .join(snippetsDir, path.basename(snippetPath))
          .replace('.snippets.tsx', '.ts');
        await fs.writeFile(transformedSnippetPath, transformedSnippetCode);
        return transformedSnippetPath;
      }),
    )
  )
    .map((snippetsFile) => removeExtension(relativeTo(path.dirname(snippetsIndexFile), snippetsFile)))
    .sort()
    .map((relativePath) => ({
      componentName: path.basename(relativePath),
      importName: `snippets$${path.basename(relativePath)}`,
      relativePath,
    }));

  const importStatements = snippets
    .map(({ importName, relativePath }) => `import { snippets as ${importName} } from '${relativePath}';`)
    .join('\n');
  const exportStatement = dedent`
    export default [
      ${snippets
        .map(({ importName, componentName }) => `({ snippets: ${importName}, group: '${componentName}' })`)
        .join(',\n')}
    ].map(({ snippets, group }) =>
      snippets.map((snippet) => ({
        ...snippet,
        group,
      })),
    ).flat();
  `;

  const prettierOptions = (await prettier.resolveConfig(snippetsIndexFile)) ?? {};
  const snippetsIndexCode = prettier.format(
    dedent`
      ${importStatements}

      ${exportStatement}
    `,
    { ...prettierOptions, parser: 'babel-ts' },
  );

  console.log('Update', relativeToProject(snippetsIndexFile));
  await fs.writeFile(snippetsIndexFile, snippetsIndexCode, 'utf-8');
})();
