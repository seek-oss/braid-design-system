const path = require('path');
const SkuWebpackPlugin = require('sku/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const browserslist = require('../browserslist');

const braidSrc = '../packages/braid-design-system';

module.exports = {
  title: 'BRAID',
  outputPath: './dist/playroom',
  components: `${braidSrc}/lib/playroom/components.ts`,
  snippets: `${braidSrc}/lib/playroom/snippets.ts`,
  themes: `${braidSrc}/lib/themes/index.ts`,
  frameComponent: `${braidSrc}/lib/playroom/FrameComponent.tsx`,
  scope: `${braidSrc}/lib/playroom/useScope.ts`,
  typeScriptFiles: [`${braidSrc}/lib/**/*.{ts,tsx}`, '!**/node_modules'],
  widths: [320, 768, 1024, 1400],
  openBrowser: false,
  port: 8082,
  webpackConfig: () => ({
    plugins: [
      new MiniCssExtractPlugin({
        ignoreOrder: true,
      }),
      new SkuWebpackPlugin({
        include: ['lib', 'css', 'reset', 'themes'].map((dir) =>
          path.join(__dirname, braidSrc, dir),
        ),
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
