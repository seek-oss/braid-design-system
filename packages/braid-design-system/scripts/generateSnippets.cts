import path from 'path';

import { type NodePath, type PluginObj, transformFileAsync } from '@babel/core';
import type * as types from '@babel/types';
import type { ObjectExpression } from '@babel/types';
import glob from 'fast-glob';
import fs from 'fs-extra';
import prettier from 'prettier';

import { debugLog, relativeTo } from './utils';

const baseDir = path.join(__dirname, '..');
const componentsDir = path.join(baseDir, 'src/lib/components');
const recipesDir = path.join(baseDir, 'src/lib/playroom/recipes');
const snippetsDir = path.join(baseDir, 'src/lib/playroom/snippets');
const snippetsIndexFile = path.join(baseDir, 'src/lib/playroom/snippets.ts');

/**
 * Removes the `Container` property from snippets before  exporting to Playroom.
 * This optional property is only used to provide wrapping components for the
 * purposes of the Braid docs site.
 */
const stripContainerPropertyPlugin = ({ types: t }: { types: typeof types }): PluginObj => ({
  name: 'stripContainerPropertyPlugin',
  visitor: {
    ObjectExpression(treePath: NodePath<ObjectExpression>) {
      const properties = treePath.node.properties;
      const filteredProperties = properties.filter(
        (property) => !(t.isObjectProperty(property) && t.isIdentifier(property.key, { name: 'Container' })),
      );

      if (filteredProperties.length !== properties.length) {
        treePath.node.properties = filteredProperties;
      }
    },
  },
});

const relativeToProject = (p: string) => path.relative(baseDir, p);
const transformWithBabel = async (fileName: string) => {
  const result = await transformFileAsync(fileName, {
    plugins: [
      [require.resolve('babel-plugin-transform-remove-imports'), { removeAll: true }],
      [require.resolve('babel-plugin-macros'), { source: { codeOnly: true } }],
      [require.resolve('@babel/plugin-transform-typescript'), { isTSX: true }],
      [stripContainerPropertyPlugin],
      [require.resolve('babel-plugin-remove-unused-vars')], // Clean up any unused vars as result of previous plugins
    ],
    babelrc: false,
    configFile: false,
  });

  if (!result?.code) {
    throw new Error(`No result from Babel transform of ${relativeToProject(fileName)}`);
  }

  return result.code;
};

const generateSnippetsForPaths = async (snippetPaths: string[]) => {
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

  return {
    importStatements: importStatements.sort(),
    exportEntries: exportEntries.sort(),
  };
};

(async () => {
  const componentSnippetPaths = await glob('**/*.snippets.tsx', {
    cwd: componentsDir,
    absolute: true,
    onlyFiles: true,
  });
  const recipeSnippetPaths = await glob('**/*.snippets.tsx', {
    cwd: recipesDir,
    absolute: true,
    onlyFiles: true,
  });

  await fs.emptyDir(snippetsDir);

  const { importStatements: recipeImportStatements, exportEntries: recipeExportEntries } =
    await generateSnippetsForPaths(recipeSnippetPaths);
  const { importStatements: componentImportStatements, exportEntries: componentExportEntries } =
    await generateSnippetsForPaths(componentSnippetPaths);

  const prettierOptions = (await prettier.resolveConfig(snippetsIndexFile)) ?? {};
  const snippetsIndexCode = await prettier.format(
    ` ${[...recipeImportStatements, ...componentImportStatements].sort().join('\n')}

      const groupOrder = ['Layouts', 'Blocks', 'Components'];
      const allSnippets = [];
      const snippetsMap = {
        ${[...recipeExportEntries, ...componentExportEntries].join(',\n')}
      };

      for (const [name, snippets] of Object.entries(snippetsMap)) {
        for (const snippet of snippets) {
          allSnippets.push({
            ...snippet,
            name: 'name' in snippet ? snippet.name : name,
            group: 'group' in snippet ? snippet.group : 'Components',
          });
        }
      }
        
      allSnippets.sort((a, b) => {
        const aIndex = groupOrder.indexOf(a.group);
        const bIndex = groupOrder.indexOf(b.group);
        return (aIndex === -1 ? 3 : aIndex) - (bIndex === -1 ? 3 : bIndex);
      });
      
      export default allSnippets;
    `,
    { ...prettierOptions, parser: 'babel-ts' },
  );

  debugLog('Update', relativeToProject(snippetsIndexFile));
  await fs.writeFile(snippetsIndexFile, snippetsIndexCode, 'utf-8');
})();
