const path = require('path');
const routes = require('./sku.routes.js');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const browserslist = require('../browserslist');

const isGitHubPages = Boolean(process.env.IS_GITHUB_PAGES);

module.exports = {
  srcPaths: [
    '../packages/braid-design-system/color-mode',
    '../packages/braid-design-system/css',
    '../packages/braid-design-system/lib',
    '../packages/braid-design-system/reset',
    '../packages/braid-design-system/scripts',
    '../packages/braid-design-system/test',
    '../packages/braid-design-system/themes',
    'src',
  ],
  clientEntry: './src/client.tsx',
  renderEntry: './src/render.tsx',
  routes,
  rootResolution: false,
  public: './src/public',
  target: './dist',
  publicPath: isGitHubPages ? '/braid-design-system/' : '/',
  supportedBrowsers: browserslist,
  setupTests: './setupTests.ts',
  displayNamesProd: true,
  dangerouslySetWebpackConfig: (config) => {
    config.plugins.push(
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        failOnError: true,
      }),
    );

    // Import Changelog as a raw string so it can be passed to the markdown renderer
    config.module.rules.push({
      test: path.join(
        __dirname,
        '../packages/braid-design-system/CHANGELOG.md',
      ),
      type: 'asset/source',
    });

    return config;
  },
  skipPackageCompatibilityCompilation: ['lodash', 'prettier'],
};
