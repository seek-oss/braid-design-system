const path = require('path');
const SkuWebpackPlugin = require('sku/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const browserslist = require('../browserslist');

const braidRoot = path.join(__dirname, '../packages/braid-design-system');
const resolveFromBraid = (p) => require.resolve(path.join(braidRoot, p));

module.exports = {
  outputPath: './dist/playroom',
  components: resolveFromBraid('src/lib/playroom/components.ts'),
  snippets: resolveFromBraid('src/lib/playroom/snippets.ts'),
  themes: resolveFromBraid('src/lib/themes/index.ts'),
  frameComponent: resolveFromBraid('src/lib/playroom/FrameComponent.tsx'),
  scope: resolveFromBraid('src/lib/playroom/useScope.ts'),
  typeScriptFiles: [`${braidRoot}/src/**/*.{ts,tsx}`],
  widths: [320, 768, 1024, 1400],
  openBrowser: false,
  port: 8082,
  webpackConfig: () => ({
    plugins: [
      new MiniCssExtractPlugin({
        ignoreOrder: true,
      }),
      new SkuWebpackPlugin({
        include: [path.join(braidRoot, 'src')],
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
