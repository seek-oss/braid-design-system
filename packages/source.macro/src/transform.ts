import MagicString, { type SourceMap } from 'magic-string';
import { type Node, Visitor, parseSync } from 'oxc-parser';
import prettier from 'prettier';

export const sourceMacroImportSpecifier = '@braid-design-system/source.macro';

export interface TransformSourceMacroOptions {
  /**
   * Used to determine the language of the code, and in error messages.
   * Defaults to `file.tsx`.
   */
  filename?: string;
  /**
   * Whether to return just the code string, rather than an object containing
   * the code string and the original value. Defaults to `false`.
   */
  codeOnly?: boolean;
}

export interface TransformSourceMacroResult {
  code: string;
  map: SourceMap;
}

type CallExpression = Extract<Node, { type: 'CallExpression' }>;

const formatCode = async (source: string, argument?: Node) => {
  if (!argument) {
    return 'undefined';
  }

  const code = source.slice(argument.start, argument.end);

  // At the start of a statement, these would be parsed as a block or declaration
  const isAmbiguous =
    argument.type === 'ObjectExpression' ||
    argument.type === 'FunctionExpression' ||
    argument.type === 'ClassExpression';

  const formatted = (
    await prettier.format(isAmbiguous ? `(${code})` : code, {
      parser: 'typescript',
      semi: false,
    })
  ).trim();

  return (
    isAmbiguous ? formatted.replace(/^;\(([\s\S]*)\)$/, '$1') : formatted
  ).replace(/^;/, ''); // Remove leading semicolons from JSX
};

/**
 * Replaces calls to the `source` macro, e.g. `source(<div />)`, with an object
 * containing the code as a string and the original value, e.g.
 * `{ code: '<div />', value: <div /> }`.
 *
 * Only `source` imported from this package without being renamed is supported.
 * All type imports from this package are removed.
 *
 * This is the transform used by the bundler `plugin`, exposed so that it can
 * be used programmatically.
 */
export const transformSourceMacro = async (
  code: string,
  { filename = 'file.tsx', codeOnly = false }: TransformSourceMacroOptions = {},
): Promise<TransformSourceMacroResult> => {
  const { program, errors } = parseSync(filename, code, {
    preserveParens: false,
  });

  if (errors.length > 0) {
    throw new Error(`Failed to parse ${filename}: ${errors[0].message}`);
  }

  const result = new MagicString(code);
  const calls: CallExpression[] = [];
  // An object literal in these positions would be parsed as a block
  const needsParens = new Set<Node>();
  let hasMacroImport = false;

  new Visitor({
    ImportDeclaration(node) {
      if (node.source.value !== sourceMacroImportSpecifier) {
        return;
      }

      const isType = (specifier: (typeof node.specifiers)[number]) =>
        node.importKind === 'type' ||
        (specifier.type === 'ImportSpecifier' &&
          specifier.importKind === 'type');

      const isMacro = (specifier: (typeof node.specifiers)[number]) =>
        !isType(specifier) &&
        specifier.local.name === 'source' &&
        (specifier.type === 'ImportDefaultSpecifier' ||
          specifier.type === 'ImportSpecifier');

      // Anything else being imported isn't supported, so the import is left alone
      if (!node.specifiers.every((s) => isType(s) || isMacro(s))) {
        return;
      }

      hasMacroImport ||= node.specifiers.some(isMacro);

      // Type imports are erased by TypeScript anyway, but need to be removed so
      // that `babel-plugin-macros`, which sku currently runs, doesn't try (and
      // fail) to resolve the package from them.
      // TODO: Only remove the `source` import once sku drops `babel-plugin-macros`
      result.remove(
        node.start,
        code[node.end] === '\n' ? node.end + 1 : node.end,
      );
    },
    ExpressionStatement(node) {
      needsParens.add(node.expression);
    },
    ArrowFunctionExpression(node) {
      needsParens.add(node.body);
    },
    CallExpression(node) {
      if (node.callee.type === 'Identifier' && node.callee.name === 'source') {
        calls.push(node);
      }
    },
  }).visit(program);

  // Calls to a `source` that wasn't imported from this package aren't ours
  const macroCalls = hasMacroImport ? calls : [];
  let lastEnd = -1;

  for (const call of macroCalls) {
    const [argument] = call.arguments;

    if (argument?.type === 'SpreadElement') {
      throw new Error(
        `${filename}: \`source\` doesn't support spread arguments.`,
      );
    }

    const codeLiteral = JSON.stringify(await formatCode(code, argument));

    if (codeOnly) {
      // Calls nested within a call that's already been replaced are dropped with it
      if (call.start >= lastEnd) {
        result.overwrite(call.start, call.end, codeLiteral);
        lastEnd = call.end;
      }
      continue;
    }

    const open = needsParens.has(call) ? '({' : '{';
    const close = needsParens.has(call) ? ' })' : ' }';

    if (argument) {
      // Only the call itself is replaced, so that any macro calls nested within
      // the argument are replaced independently
      result.overwrite(
        call.start,
        argument.start,
        `${open} code: ${codeLiteral}, value: `,
      );
      result.overwrite(argument.end, call.end, close);
    } else {
      result.overwrite(
        call.start,
        call.end,
        `${open} code: ${codeLiteral}, value: undefined${close}`,
      );
    }
  }

  return {
    code: result.toString(),
    map: result.generateMap({ source: filename, hires: true }),
  };
};
