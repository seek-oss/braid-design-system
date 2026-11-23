import fs from 'fs/promises';
import path from 'path';

import { transformSourceMacro } from '@braid-design-system/source.macro';
import MagicString from 'magic-string';
import { minifySync } from 'oxc-minify';
import { type Node, parseSync, Visitor } from 'oxc-parser';
import { transformSync } from 'oxc-transform';
import prettier from 'prettier';

import { debugLog, relativeTo } from './utils.ts';

const baseDir = path.join(import.meta.dirname, '..');
const componentsDir = path.join(baseDir, 'src/lib/components');
const templatesDir = path.join(baseDir, 'src/lib/playroom/templates');
const patternsDir = path.join(baseDir, 'src/lib/playroom/patterns');
const snippetsDir = path.join(baseDir, 'src/lib/playroom/snippets');
const snippetsIndexFile = path.join(baseDir, 'src/lib/playroom/snippets.ts');

interface Edit {
  start: number;
  end: number;
  text: string;
}

/**
 * Removes the items at the given indexes from a comma separated list,
 * taking the separating commas with them.
 */
const removeListItems = (items: Node[], removedIndexes: Set<number>): Edit[] => {
  const keptIndexes = items.map((_, index) => index).filter((index) => !removedIndexes.has(index));
  const lastKept = keptIndexes.at(-1);

  if (lastKept === undefined) {
    return [{ start: items[0].start, end: items.at(-1)!.end, text: '' }];
  }

  const edits: Edit[] = [];

  for (let i = 0; i < lastKept; i++) {
    if (removedIndexes.has(i)) {
      edits.push({ start: items[i].start, end: items[i + 1].start, text: '' });
    }
  }

  if (lastKept < items.length - 1) {
    edits.push({ start: items[lastKept].end, end: items.at(-1)!.end, text: '' });
  }

  return edits;
};

/**
 * Applies the edits, dropping any that are nested inside another edit.
 */
const applyEdits = (code: string, edits: Edit[]) => {
  const result = new MagicString(code);
  let lastEnd = -1;

  for (const edit of [...edits].sort((a, b) => a.start - b.start || b.end - a.end)) {
    if (edit.start < lastEnd) {
      continue;
    }

    result.overwrite(edit.start, edit.end, edit.text);
    lastEnd = edit.end;
  }

  return result.toString();
};

const isStringOrTemplateLiteral = (node: Node) =>
  (node.type === 'Literal' && typeof node.value === 'string') || node.type === 'TemplateLiteral';

/**
 * Applies two snippet specific transforms:
 *
 * - Removes the `Container` property from snippets before exporting to Playroom.
 *   This optional property is only used to provide wrapping components for the
 *   purposes of the Braid docs site.
 * - Resolves `code` properties that are arrow functions returning a string literal
 *   to just the string literal. Template and pattern snippets define `code` as a
 *   function to support passing state helpers for interactive docs examples, but
 *   Playroom only needs the static code string.
 */
const transformSnippetProperties = (code: string, fileName: string) => {
  const { program, errors } = parseSync(fileName, code, { preserveParens: false });

  if (errors.length > 0) {
    throw new Error(`Failed to parse ${relativeToProject(fileName)}: ${errors[0].message}`);
  }

  const edits: Edit[] = [];

  new Visitor({
    ObjectExpression(node) {
      const removedIndexes = new Set<number>();

      node.properties.forEach((property, index) => {
        if (property.type === 'Property' && property.key.type === 'Identifier' && property.key.name === 'Container') {
          removedIndexes.add(index);
        }
      });

      if (removedIndexes.size > 0) {
        edits.push(...removeListItems(node.properties, removedIndexes));
      }
    },
    Property(node) {
      if (
        node.key.type === 'Identifier' &&
        node.key.name === 'code' &&
        node.value.type === 'ArrowFunctionExpression' &&
        isStringOrTemplateLiteral(node.value.body)
      ) {
        edits.push({
          start: node.value.start,
          end: node.value.end,
          text: code.slice(node.value.body.start, node.value.body.end),
        });
      }
    },
  }).visit(program);

  return applyEdits(code, edits);
};

const glob = async (pattern: string, cwd: string) => {
  const files: string[] = [];
  for await (const file of fs.glob(pattern, { cwd })) {
    files.push(path.join(cwd, file));
  }
  return files;
};

const relativeToProject = (p: string) => path.relative(baseDir, p);

/**
 * Transforms a snippets file into a module that only contains the snippets.
 * The macros are resolved, the snippet specific properties are cleaned up,
 * and TypeScript, imports and any variables left unused as a result are removed.
 */
const transformSnippets = async (fileName: string) => {
  const source = await fs.readFile(fileName, 'utf-8');

  const { code: macroResolved } = await transformSourceMacro(source, { filename: fileName, codeOnly: true });
  const propertiesTransformed = transformSnippetProperties(macroResolved, fileName);

  const { code, errors } = transformSync(fileName, propertiesTransformed, {
    lang: 'tsx',
    jsx: 'preserve',
  });

  if (errors.length > 0) {
    throw new Error(`Failed to transform ${relativeToProject(fileName)}: ${errors[0].message}`);
  }

  // Only dead code elimination is enabled, so nothing is mangled or rewritten
  const minified = minifySync(fileName.replace(/\.tsx$/, '.jsx'), code, {
    compress: { target: 'esnext', sequences: false, unused: true },
    mangle: false,
    codegen: { removeWhitespace: false },
  });

  if (minified.errors.length > 0) {
    throw new Error(`Failed to minify ${relativeToProject(fileName)}: ${minified.errors[0].message}`);
  }

  // Imports that only had unused specifiers are left behind as side effect imports
  return minified.code.replace(/^import\s+(["'])[^"']+\1;\n/gm, '');
};

const generateSnippetsForPaths = async (snippetPaths: string[]) => {
  const importStatements: string[] = [];
  const exportEntries: string[] = [];

  await Promise.all(
    snippetPaths.map(async (snippetPath) => {
      const transformedCode = await transformSnippets(snippetPath);
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
