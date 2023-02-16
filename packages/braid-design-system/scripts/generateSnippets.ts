/* eslint-disable no-console */
import prettier from 'prettier';
import fs from 'fs-extra';
import glob from 'fast-glob';
import path from 'path';
import dedent from 'dedent';

const baseDir = path.join(__dirname, '..');
const componentsDir = path.join(baseDir, 'src/lib/components');
const snippetsIndexFile = path.join(baseDir, 'src/lib/playroom/snippets.ts');

const relativeToProject = (p: string) => path.relative(baseDir, p);
const removeExtension = (p: string) => p.replace(path.extname(p), '');

(async () => {
  const snippetPaths = await glob('**/*.snippets.tsx', {
    cwd: componentsDir,
    absolute: true,
    onlyFiles: true,
  });

  const snippets = snippetPaths
    .map((componentFile) => removeExtension(path.relative(path.dirname(snippetsIndexFile), componentFile)))
    .sort()
    .map((relativePath) => ({
      // trim the `.snippets` extension
      componentName: removeExtension(path.basename(relativePath)),
      importName: `snippets$${removeExtension(path.basename(relativePath))}`,
      relativePath,
    }));

  const importStatements = snippets
    .map(({ importName, relativePath }) => `import { snippets as ${importName} } from '${relativePath}';`)
    .join('\n');
  const exportStatement = dedent`
    export default [
      ${snippets
        .map(({ importName, componentName }) => `({ snippets: ${importName}, fallbackGroup: '${componentName}' })`)
        .join(',\n')}
    ].map(({ snippets, fallbackGroup }) =>
      snippets.map((snippet) => ({
        ...snippet,
        group: snippet.group || fallbackGroup,
        code: snippet.code.code,
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
