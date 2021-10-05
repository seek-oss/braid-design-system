import fs from 'fs';
import { parse, print } from 'recast';
import { transformFromAstSync, parseSync } from '@babel/core';
import prettier from 'prettier';
// @ts-expect-error
import jsxSyntax from '@babel/plugin-syntax-jsx';
// @ts-expect-error
import typescriptSyntax from '@babel/plugin-syntax-typescript';

import atomsPlugin from './plugin-deprecate/plugin-deprecate-atoms';
import propsPlugin from './plugin-deprecate/plugin-deprecate-props';
import varsPlugin from './plugin-deprecate/plugin-deprecate-vars';
import importUpdatePlugin from './plugin-deprecate/plugin-import-update';

const pluginsForVersion = {
  v31: [propsPlugin, atomsPlugin, varsPlugin, importUpdatePlugin],
};

type Version = keyof typeof pluginsForVersion;

export function babelRecast({
  version,
  code,
  filePath,
}: {
  version: Version;
  code: string;
  filePath: string;
}) {
  const ast = parse(code, {
    parser: {
      parse: (source: string) =>
        parseSync(source, {
          plugins: [jsxSyntax],
          overrides: [
            {
              test: [`**/*.ts`, `**/*.tsx`],
              plugins: [[typescriptSyntax, { isTSX: true }]],
            },
          ],
          filename: filePath,
          parserOpts: {
            tokens: true,
          },
        }),
    },
  });

  const options = {
    cloneInputAst: false,
    configFile: false,
    babelrc: false,
    code: false,
    ast: true,
    filename: filePath,
    plugins: pluginsForVersion[version],
  };

  const transformResult = transformFromAstSync(ast, code, options);

  if (!transformResult || (transformResult && !transformResult.ast)) {
    throw new Error(`An error occurred transforming: ${filePath}`);
  }

  const { ast: transformedAST, metadata } = transformResult;

  return {
    // @ts-expect-error
    warnings: metadata ? metadata.warnings : [],
    // @ts-expect-error
    hasChanged: metadata ? metadata.hasChanged : false,
    // @ts-expect-error
    source: print(transformedAST).code,
  };
}

export interface CodemodResult {
  updated: boolean;
  warnings: Array<string>;
  filePath: string;
}
export default async ({
  version,
  filePath,
}: {
  version: Version;
  filePath: string;
}) => {
  const code = await fs.promises.readFile(filePath, { encoding: 'utf-8' });

  const {
    source: newSource,
    warnings,
    hasChanged,
  } = babelRecast({ version, code, filePath });

  const result: CodemodResult = {
    filePath,
    updated: hasChanged,
    warnings,
  };

  if (hasChanged) {
    await fs.promises.writeFile(
      filePath,
      prettier.format(newSource, {
        parser: 'babel-ts',
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
      }),
      { encoding: 'utf-8' },
    );
  }

  return result;
};
