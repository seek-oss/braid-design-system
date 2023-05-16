import fs from 'fs';
import { parse, print } from 'recast';
import {
  type TransformOptions,
  transformFromAstSync,
  parseSync,
} from '@babel/core';
import prettier from 'prettier';
// @ts-expect-error
import jsxSyntax from '@babel/plugin-syntax-jsx';
// @ts-expect-error
import typescriptSyntax from '@babel/plugin-syntax-typescript';

import atomsPlugin from './plugin-deprecate/plugin-deprecate-atoms';
import propsPlugin from './plugin-deprecate/plugin-deprecate-props';
import varsPlugin from './plugin-deprecate/plugin-deprecate-vars';
import importUpdatePlugin from './plugin-deprecate/plugin-import-update';
import propRenamePlugin from './plugin-deprecate/plugin-prop-rename';
import { v31 } from './plugin-deprecate/deprecationMaps/v31';
import { v31_11 } from './plugin-deprecate/deprecationMaps/v31-11';

const pluginsForVersion = {
  v31: [
    [propsPlugin, { deprecations: v31 }],
    [atomsPlugin, { deprecations: v31 }],
    [varsPlugin, { deprecations: v31 }],
    importUpdatePlugin,
  ],
  [`v31.11`]: [[propRenamePlugin, { renames: v31_11 }]],
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
  try {
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

    const options: TransformOptions = {
      cloneInputAst: false,
      configFile: false,
      babelrc: false,
      code: false,
      ast: true,
      filename: filePath,
      plugins: pluginsForVersion[version],
      generatorOpts: {
        retainLines: true,
      },
    };

    const transformResult = transformFromAstSync(ast, code, options);

    if (!transformResult || (transformResult && !transformResult.ast)) {
      return {
        warnings: [],
        error: 'Error transforming code',
        hasChanged: false,
        source: code,
      };
    }

    const { ast: transformedAST, metadata } = transformResult;

    return {
      // @ts-expect-error
      warnings: metadata?.warnings ?? [],
      // @ts-expect-error
      hasChanged: metadata?.hasChanged ?? false,
      // @ts-expect-error
      source: print(transformedAST).code,
    };
  } catch (e) {
    return {
      warnings: [],
      error: `${e}`,
      hasChanged: false,
      source: code,
    };
  }
}

export interface CodemodResult {
  updated: boolean;
  warnings: Array<string>;
  error?: string;
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
    error,
    hasChanged,
  } = babelRecast({ version, code, filePath });

  const result: CodemodResult = {
    filePath,
    updated: hasChanged,
    warnings,
    error,
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
