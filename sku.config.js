const routes = require('./sku.routes.js');

const isGitHubPages =
  process.env.TRAVIS_BRANCH === 'master' &&
  !process.env.TRAVIS_PULL_REQUEST_SHA;

module.exports = {
  srcPaths: ['lib', 'docs/src', 'scripts'],
  clientEntry: 'docs/src/client.js',
  renderEntry: 'docs/src/render.js',
  routes,
  public: 'docs/src/public',
  target: 'docs/dist',
  publicPath: isGitHubPages ? '/braid-design-system/' : '/'
};
