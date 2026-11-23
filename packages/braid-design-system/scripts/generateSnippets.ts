import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

import { type NodePath, type PluginObj, transformAsync } from '@babel/core';
import type * as types from '@babel/types';
import type { ObjectExpression } from '@babel/types';
import { transformSourceMacro } from '@braid-design-system/source.macro';
import prettier from 'prettier';

import { debugLog, relativeTo } from './utils.ts';

const baseDir = path.join(import.meta.dirname, '..');
const componentsDir = path.join(baseDir, 'src/lib/components');
const templatesDir = path.join(baseDir, 'src/lib/playroom/templates');
const patternsDir = path.join(baseDir, 'src/lib/playroom/patterns');
const snippetsDir = path.join(baseDir, 'src/lib/playroom/snippets');
const snippetsIndexFile = path.join(baseDir, 'src/lib/playroom/snippets.ts');

/**
 * Resolves `code` properties that are arrow functions returning a string literal
 * to just the string literal. Template and pattern snippets define `code` as a
 * function to support passing state helpers for interactive docs examples, but
 * Playroom only needs the static code string.
 */
const resolveCodeFunctionPlugin = ({ types: t }: { types: typeof types }): PluginObj => ({
  name: 'resolveCodeFunctionPlugin',
  visitor: {
    ObjectProperty(nodePath: NodePath<types.ObjectProperty>) {
      if (!t.isIdentifier(nodePath.node.key, { name: 'code' })) {
        return;
      }
      const value = nodePath.node.value;
      if (!t.isArrowFunctionExpression(value)) {
        return;
      }
      const { body } = value;
      if (t.isStringLiteral(body) || t.isTemplateLiteral(body)) {
        nodePath.node.value = body;
      }
    },
  },
});

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

const glob = async (pattern: string, cwd: string) => {
  const files: string[] = [];
  for await (const file of fs.glob(pattern, { cwd })) {
    files.push(path.join(cwd, file));
  }
  return files;
};

const relativeToProject = (p: string) => path.relative(baseDir, p);
const transformWithBabel = async (fileName: string) => {
  const source = await fs.readFile(fileName, 'utf-8');
  const { code: macroResolved } = await transformSourceMacro(source, { filename: fileName, codeOnly: true });

  const result = await transformAsync(macroResolved, {
    filename: fileName,
    plugins: [
      [fileURLToPath(import.meta.resolve('babel-plugin-transform-remove-imports')), { removeAll: true }],
      [fileURLToPath(import.meta.resolve('@babel/plugin-transform-typescript')), { isTSX: true }],
      [stripContainerPropertyPlugin],
      [resolveCodeFunctionPlugin],
      [fileURLToPath(import.meta.resolve('babel-plugin-remove-unused-vars'))], // Clean up any unused vars as result of previous plugins
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

const componentSnippetPaths = await glob('**/*.snippets.tsx', componentsDir);
const templatesSnippetPaths = await glob('**/*.snippets.tsx', templatesDir);
const patternsSnippetPaths = await glob('**/*.snippets.tsx', patternsDir);

await fs.rm(snippetsDir, { recursive: true, force: true });
await fs.mkdir(snippetsDir, { recursive: true });

const { importStatements: templatesImportStatements, exportEntries: templatesExportEntries } =
  await generateSnippetsForPaths(templatesSnippetPaths);
const { importStatements: patternsImportStatements, exportEntries: patternsExportEntries } =
  await generateSnippetsForPaths(patternsSnippetPaths);
const { importStatements: componentImportStatements, exportEntries: componentExportEntries } =
  await generateSnippetsForPaths(componentSnippetPaths);

const prettierOptions = (await prettier.resolveConfig(snippetsIndexFile)) ?? {};
const snippetsIndexCode = await prettier.format(
  ` ${[...templatesImportStatements, ...patternsImportStatements, ...componentImportStatements].sort().join('\n')}

      const groupOrder = ['Layouts', 'Sections', 'Patterns', 'Components'];
      const allSnippets = [];
      const snippetsMap = {
        ${[...templatesExportEntries, ...patternsExportEntries, ...componentExportEntries].join(',\n')}
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
        return (aIndex === -1 ? 4 : aIndex) - (bIndex === -1 ? 4 : bIndex);
      });
      
      export default allSnippets;
    `,
  { ...prettierOptions, parser: 'babel-ts' },
);

debugLog('Update', relativeToProject(snippetsIndexFile));
await fs.writeFile(snippetsIndexFile, snippetsIndexCode, 'utf-8');
