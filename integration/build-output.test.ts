import { exec as _exec } from 'child_process';
import path from 'path';
import { promisify } from 'util';

import { cssFileFilter as isVanillaFile } from '@vanilla-extract/integration';
import { rgPath } from '@vscode/ripgrep';
import braidPkg from 'braid-design-system/package.json';
import glob from 'fast-glob';
import webpack from 'webpack';

const { SideEffectsFlagPlugin } = webpack.optimize;
const exec = promisify(_exec);

describe('build', () => {
  const cache = new Map<string, RegExp>();
  const checkSideEffects = (filePath: string): boolean => {
    // format the path the way Webpack does it internally
    const relativePath = `./${filePath}`;
    // https://github.com/webpack/webpack/blob/v5.72.1/lib/optimize/SideEffectsFlagPlugin.js#L89-L94
    const hasSideEffects = SideEffectsFlagPlugin.moduleHasSideEffects(
      relativePath,
      braidPkg.sideEffects,
      cache,
    );
    return Boolean(hasSideEffects);
  };

  const ignoreVanillaFiles = (filePath: string) =>
    !isVanillaFile.test(filePath);

  const rootDir = path.dirname(
    require.resolve('braid-design-system/package.json'),
  );

  test('side-effects from src', async () => {
    const srcFiles = await glob(
      [
        'src/**/*.{js,jsx,ts,tsx}',
        '!**/*.{d,docs,gallery,playroom,screenshots,snippets,stories,test}.{ts,tsx}',
      ],
      {
        cwd: rootDir,
      },
    );

    const filesWithSideEffects = srcFiles
      .sort()
      .filter(checkSideEffects)
      .filter(ignoreVanillaFiles);

    expect(filesWithSideEffects).toMatchSnapshot();
  });

  test('side-effects from dist', async () => {
    const distFiles = await glob(['dist/**/*.{cjs,mjs}'], {
      cwd: rootDir,
    });

    const filesWithSideEffects = distFiles
      .sort()
      .filter(checkSideEffects)
      .filter(ignoreVanillaFiles);

    expect(filesWithSideEffects).toMatchSnapshot();
  });

  test('Vanilla Extract files imported as side-effects', async () => {
    const filePrefix = '### ';
    const getFiles = async (
      cwd: string,
      search: RegExp,
      searchPath: string,
    ) => {
      const options = [
        '--context=0',
        '--color=never',
        '--heading',
        '--line-number',
        '--no-ignore',
        `--regexp='${search.source}'`,
        '--sort=path',
        "--glob='!*.d.{m,c}ts'", // Ignore declaration files
      ];
      const rgArgs = [...options, searchPath];

      const { stdout } = await exec(`${rgPath} ${rgArgs.join(' ')}`, {
        cwd,
      });

      return stdout
        .split('\n')
        .map((line) =>
          line.startsWith(`${searchPath}/`) ? `${filePrefix}${line}:` : line,
        )
        .map((line) => line.replace(/^(\d+)(:|-)/, '$1 │ '))
        .join('\n');
    };

    const filesWithVanillaStyles = await getFiles(
      rootDir,
      /import ".*\.css\.mjs"/,
      'dist',
    );

    expect.addSnapshotSerializer({
      test: (val) => typeof val === 'string' && val.startsWith(filePrefix),
      print: (val) => (val as string).trim(),
    });
    expect(filesWithVanillaStyles).toMatchSnapshot();
  });
});
