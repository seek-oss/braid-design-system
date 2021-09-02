const path = require('path');
const SkuWebpackPlugin = require('sku/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const browserslist = require('./browserslist');

const baseUrl = process.env.CI
  ? `${process.env.IS_GITHUB_PAGES ? '/braid-design-system' : ''}/playroom`
  : undefined;

module.exports = {
  components: './lib/playroom/components.ts',
  outputPath: './site/dist/playroom',
  title: 'BRAID',
  snippets: './lib/playroom/snippets.ts',
  themes: './lib/themes/index.ts',
  frameComponent: './lib/playroom/FrameComponent.tsx',
  scope: './lib/playroom/useScope.ts',
  typeScriptFiles: ['lib/**/*.{ts,tsx}', '!**/node_modules'],
  widths: [320, 768, 1024, 1400],
  openBrowser: false,
  port: 8082,
  baseUrl,

  webpackConfig: () => ({
    plugins: [
      new MiniCssExtractPlugin({
        ignoreOrder: true,
      }),
      new SkuWebpackPlugin({
        include: ['lib', 'css', 'reset', 'themes'].map((dir) =>
          path.join(__dirname, dir),
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
