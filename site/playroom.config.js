const path = require('path');
const SkuWebpackPlugin = require('sku/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const browserslist = require('../browserslist');

const braidSrc = path.join(__dirname, '../packages/braid-design-system/src');
const resolveFromBraid = (p) => require.resolve(path.join(braidSrc, p));

module.exports = {
  outputPath: './dist/playroom',
  components: resolveFromBraid('lib/playroom/components.ts'),
  snippets: resolveFromBraid('lib/playroom/snippets.ts'),
  themes: resolveFromBraid('lib/themes/index.ts'),
  frameComponent: resolveFromBraid('lib/playroom/FrameComponent.tsx'),
  scope: resolveFromBraid('lib/playroom/useScope.ts'),
  typeScriptFiles: [`${braidSrc}/**/*.{ts,tsx}`],
  widths: [320, 768, 1024, 1400],
  openBrowser: false,
  port: 8082,
  webpackConfig: () => ({
    plugins: [
      new MiniCssExtractPlugin({
        ignoreOrder: true,
      }),
      new SkuWebpackPlugin({
        include: [braidSrc],
        target: 'browser',
        browserslist,
        mode: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
        displayNamesProd: true,
        removeAssertionsInProduction: false,
        MiniCssExtractPlugin,
      }),
    ],
  }),
};
