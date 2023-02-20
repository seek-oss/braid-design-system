/* eslint-disable no-console */
import prettier from 'prettier';
import fs from 'fs-extra';
import glob from 'fast-glob';
import path from 'path';
import { transformFileAsync } from '@babel/core';

import { relativeTo } from './utils';

const baseDir = path.join(__dirname, '..');
const componentsDir = path.join(baseDir, 'src/lib/components');
const snippetsDir = path.join(baseDir, 'src/lib/playroom/snippets');
const snippetsIndexFile = path.join(baseDir, 'src/lib/playroom/snippets.ts');

const relativeToProject = (p: string) => path.relative(baseDir, p);
const transformWithBabel = async (fileName: string) => {
  const result = await transformFileAsync(fileName, {
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

  const importStatements: string[] = [];
  const exportEntries: string[] = [];

  await Promise.all(
    snippetPaths.map(async (snippetPath) => {
      const transformedCode = await transformWithBabel(snippetPath);
      const outputFilename = path.basename(snippetPath).replace('.snippets.tsx', '');
      const outputPath = path.join(snippetsDir, outputFilename);

      await fs.writeFile(`${outputPath}.ts`, transformedCode, 'utf-8');

      const relativePath = relativeTo(path.dirname(snippetsIndexFile), outputPath);
      const componentName = path.basename(relativePath);

      importStatements.push(`import { snippets as ${componentName} } from '${relativePath}';`);
      exportEntries.push(componentName);
    }),
  );

  const prettierOptions = (await prettier.resolveConfig(snippetsIndexFile)) ?? {};
  const snippetsIndexCode = prettier.format(
    ` ${importStatements.sort().join('\n')}

      export default Object.entries({
        ${exportEntries.sort().join(',\n')}
      }).map(([group, snippets]) =>
        snippets.map((snippet) => ({
          ...snippet,
          group,
        })),
      ).flat();
    `,
    { ...prettierOptions, parser: 'babel-ts' },
  );

  console.log('Update', relativeToProject(snippetsIndexFile));
  await fs.writeFile(snippetsIndexFile, snippetsIndexCode, 'utf-8');
})();
