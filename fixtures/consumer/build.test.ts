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

  test('side-effects', async () => {
    const srcFiles = await glob(
      [
        '**/*.{js,ts,tsx}',
        '!**/*.{docs,gallery,playroom,screenshots,snippets,stories,test}.{ts,tsx}',
        '!node_modules',
      ],
      {
        cwd: path.dirname(require.resolve('braid-design-system/package.json')),
      },
    );

    const filesWithSideEffects = srcFiles
      .sort()
      .map((filePath) => checkSideEffects(filePath) && filePath)
      .filter(Boolean);

    expect(filesWithSideEffects).toMatchSnapshot();
  });
});
