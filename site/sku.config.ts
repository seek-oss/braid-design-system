import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type { SkuConfig } from 'sku';

import routes from './sku.routes';

const require = createRequire(import.meta.url);
const CircularDependencyPlugin = require('circular-dependency-plugin');
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const braidRoot = path.join(__dirname, '../packages/braid-design-system');
const resolveFromBraid = (p: string) => path.join(braidRoot, p);

const skuConfig: SkuConfig = {
  srcPaths: ['./src', resolveFromBraid('src')],
  clientEntry: './src/client.tsx',
  renderEntry: './src/render.tsx',
  routes,
  rootResolution: false,
  public: './src/public',
  target: './dist',
  publicPath: `${process.env.BASE_NAME}/`,
  displayNamesProd: true,
  compilePackages: ['@braid-design-system/docs-ui'],
  sourceMapsProd: false,
  dangerouslySetWebpackConfig: (config) => {
    // uncomment if you need to debug issues with side-effects
    // config.devtool = 'cheap-source-map';

    config.plugins.push(
      new CircularDependencyPlugin({
        // ensure the plugin doesn't complain about compiled Braid code
        exclude: /node_modules|braid-design-system\/dist.*/,
        failOnError: true,
      }),
    );

    config.resolve.alias = {
      ...config.resolve.alias,
      'braid-src/CHANGELOG.md': resolveFromBraid('CHANGELOG.md'),
      'braid-src': resolveFromBraid('src'),
      site: path.join(__dirname, './src'),
    };

    config.resolve.conditionNames = ['...', 'braid-dev'];

    // Import Changelog as a raw string so it can be passed to the markdown renderer
    config.module.rules.push({
      test: resolveFromBraid('CHANGELOG.md'),
      type: 'asset/source',
    });

    return config;
  },
  skipPackageCompatibilityCompilation: ['lodash', 'prettier'],
};

export default skuConfig;
