/** @jest-environment node */
import path from 'path';
import glob from 'fast-glob';
import webpack from 'webpack';
import braidPkg from 'braid-design-system/package.json'; // eslint-disable-line no-restricted-imports
import { exec } from 'child_process';
import { promisify } from 'util';
import { cssFileFilter as isVanillaFile } from '@vanilla-extract/integration';

const { SideEffectsFlagPlugin } = webpack.optimize;

describe('build', () => {
  const cache = new Map();
  const checkSideEffects = (filePath: string): boolean => {
    // format the path the way Webpack does it internally
    const relativePath = `./${filePath}`;
    // https://github.com/webpack/webpack/blob/v5.72.1/lib/optimize/SideEffectsFlagPlugin.js#L89-L94
    const hasSideEffects = SideEffectsFlagPlugin.moduleHasSideEffects(
      relativePath,
      braidPkg.sideEffects,
      cache,
    );
    return hasSideEffects;
  };

  const ignoreVanillaFiles = (filePath: string) =>
    // TODO: remove .css.cjs filter when this PR is released https://github.com/vanilla-extract-css/vanilla-extract/pull/1031
    !isVanillaFile.test(filePath) && !/\.css\.cjs$/.test(filePath);

  const rootDir = path.dirname(
    require.resolve('braid-design-system/package.json'),
  );

  beforeAll(async () => {
    // eslint-disable-next-line no-console
    console.log('Running `pnpm build`...');
    await promisify(exec)('pnpm build');
  });

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
});
