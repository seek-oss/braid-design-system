const path = require('path');
const routes = require('./sku.routes.js');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const browserslist = require('../browserslist');

const isGitHubPages = Boolean(process.env.IS_GITHUB_PAGES);

const braidSrc = '../packages/braid-design-system';

module.exports = {
  srcPaths: ['./src', braidSrc],
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
      'braid-src': path.join(__dirname, braidSrc),
      site: path.join(__dirname, './src'),
    };

    // Import Changelog as a raw string so it can be passed to the markdown renderer
    config.module.rules.push({
      test: path.join(__dirname, braidSrc, 'CHANGELOG.md'),
      type: 'asset/source',
    });

    return config;
  },
  skipPackageCompatibilityCompilation: ['lodash', 'prettier'],
};
