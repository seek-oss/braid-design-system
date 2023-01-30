const path = require('path');

const CircularDependencyPlugin = require('circular-dependency-plugin');

const browserslist = require('../browserslist');
const routes = require('./sku.routes.js');

const isGitHubPages = process.env.IS_GITHUB_PAGES === 'true';

const braidRoot = path.join(__dirname, '../packages/braid-design-system');
const resolveFromBraid = (p) => path.join(braidRoot, p);

module.exports = {
  srcPaths: ['./src', resolveFromBraid('src')],
  clientEntry: './src/client.tsx',
  renderEntry: './src/render.tsx',
  routes,
  rootResolution: false,
  public: './src/public',
  target: './dist',
  publicPath: isGitHubPages ? '/braid-design-system/' : '/',
  supportedBrowsers: browserslist,
  displayNamesProd: true,
  dangerouslySetWebpackConfig: (config) => {
    config.plugins.push(
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        failOnError: true,
      }),
    );

    config.resolve.alias = {
      ...config.resolve.alias,
      'braid-src/CHANGELOG.md': resolveFromBraid('CHANGELOG.md'),
      'braid-src': resolveFromBraid('src'),
      site: path.join(__dirname, './src'),
    };

    // Import Changelog as a raw string so it can be passed to the markdown renderer
    config.module.rules.push({
      test: resolveFromBraid('CHANGELOG.md'),
      type: 'asset/source',
    });

    return config;
  },
  skipPackageCompatibilityCompilation: ['lodash', 'prettier'],
};
