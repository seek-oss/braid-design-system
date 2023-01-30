/** @jest-environment node */
import path from 'path';
import glob from 'fast-glob';
import webpack from 'webpack';
import braidPkg from 'braid-design-system/package.json'; // eslint-disable-line no-restricted-imports

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
      .map((filePath) => checkSideEffects(filePath) && filePath)
      .filter(Boolean);

    expect(filesWithSideEffects).toMatchSnapshot();
  });

  test('side-effects from dist', async () => {
    const distFiles = await glob(['dist/**/*.{cjs,mjs}'], {
      cwd: rootDir,
    });

    const filesWithSideEffects = distFiles
      .sort()
      .filter((filePath) => checkSideEffects(filePath));

    expect(filesWithSideEffects).toMatchSnapshot();
  });
});
