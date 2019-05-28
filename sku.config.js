const routes = require('./sku.routes.js');

const isGitHubPages =
  process.env.TRAVIS_BRANCH === 'master' &&
  !process.env.TRAVIS_PULL_REQUEST_SHA;

module.exports = {
  srcPaths: ['lib', 'docs/src', 'scripts', '@types'],
  clientEntry: 'docs/src/client.tsx',
  renderEntry: 'docs/src/render.tsx',
  routes,
  public: 'docs/src/public',
  target: 'docs/dist',
  publicPath: isGitHubPages ? '/braid-design-system/' : '/',
  displayNamesProd: true,
  playroomTitle: 'BRAID',
  playroomComponents: 'lib/components/index.ts',
  playroomThemes: 'lib/themes/index.ts',
  playroomFrameComponent: 'lib/playroom/FrameComponent.tsx',
  playroomTarget: 'docs/dist/playroom',
};
