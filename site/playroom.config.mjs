import { createRequire } from 'node:module';
import path from 'node:path';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import SkuWebpackPlugin from 'sku/webpack-plugin';
import webpackPkg from 'webpack';

const { DefinePlugin } = webpackPkg;

const require = createRequire(import.meta.url);

const braidSrc = path.join(
  import.meta.dirname,
  '../packages/braid-design-system/src',
);
const resolveFromBraid = (p) => require.resolve(path.join(braidSrc, p));

export default {
  outputPath: './dist/playroom',
  components: require.resolve('./src/playroom.components.ts'),
  snippets: resolveFromBraid('entries/playroom/snippets.ts'),
  themes: resolveFromBraid('lib/themes/index.ts'),
  defaultVisibleThemes: ['apac', 'seekJobs'],
  frameComponent: require.resolve('./src/playroom.frame.ts'),
  scope: require.resolve('./src/playroom.scope.ts'),
  typeScriptFiles: [resolveFromBraid('entries/playroom/components.ts')],
  widths: [320, 390, 768, 1024, 1280, 1440, 1600],
  defaultVisibleWidths: [390, 768, 1280],
  openBrowser: false,
  port: 8082,
  webpackConfig: () => ({
    module: {
      rules: [
        // Playroom has its own CSS loaders and sku has its own CSS loaders.
        // We want to override Playroom's loaders and only use sku's ones.
        { test: /\.css$/, use: [] },
      ],
    },
    resolve: {
      alias: {
        'braid-src': braidSrc,
      },
    },
    plugins: [
      new MiniCssExtractPlugin({
        ignoreOrder: true,
      }),
      new SkuWebpackPlugin({
        include: [braidSrc],
        target: 'browser',
        mode: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
        displayNamesProd: true,
        removeAssertionsInProduction: false,
        MiniCssExtractPlugin,
      }),
      new DefinePlugin({
        'globalThis.__IS_PLAYROOM_ENVIRONMENT__': JSON.stringify('clearly'),
      }),
    ],
  }),
};
