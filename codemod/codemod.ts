import fs from 'fs';
import { parse, print } from 'recast';
import { transformFromAstSync, parseSync } from '@babel/core';
import prettier from 'prettier';

import atomsPlugin from './plugin-deprecate/plugin-deprecate-atoms';
import propsPlugin from './plugin-deprecate/plugin-deprecate-props';
import varsPlugin from './plugin-deprecate/plugin-deprecate-vars';

export function babelRecast(code: string, filename: string) {
  const ast = parse(code, {
    parser: {
      parse: (source: string) =>
        parseSync(source, {
          plugins: [`@babel/plugin-syntax-jsx`],
          overrides: [
            {
              test: [`**/*.ts`, `**/*.tsx`],
              plugins: [[`@babel/plugin-syntax-typescript`, { isTSX: true }]],
            },
          ],
          filename,
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
    filename,
    plugins: [propsPlugin, atomsPlugin, varsPlugin],
  };

  const { ast: transformedAST, metadata } = transformFromAstSync(
    ast,
    code,
    options,
  );

  const result = print(transformedAST).code;

  return {
    // @ts-expect-error
    warnings: metadata.warnings,
    // @ts-expect-error
    hasChanged: metadata.hasChanged,
    source: result,
  };
}

const runCodemod = async (filepath: string) => {
  const source = await fs.promises.readFile(filepath, { encoding: 'utf-8' });

  const {
    source: newSource,
    warnings,
    hasChanged,
  } = babelRecast(source, filepath);

  const result = {
    filepath,
    updated: hasChanged,
    warnings,
  };

  if (hasChanged) {
    await fs.promises.writeFile(
      filepath,
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

export default runCodemod;
