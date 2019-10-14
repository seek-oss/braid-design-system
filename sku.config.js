const routes = require('./sku.routes.js');

const isGitHubPages =
  process.env.TRAVIS_BRANCH === 'master' &&
  !process.env.TRAVIS_PULL_REQUEST_SHA;

module.exports = {
  srcPaths: [
    'lib',
    'themes',
    'site/src',
    'scripts',
    '@types',
    'generate-component-docs',
    'reset',
  ],
  clientEntry: 'site/src/client.tsx',
  renderEntry: 'site/src/render.tsx',
  routes,
  public: 'site/src/public',
  target: 'site/dist',
  publicPath: isGitHubPages ? '/braid-design-system/' : '/',
  displayNamesProd: true,
  playroomTitle: 'BRAID',
  playroomComponents: 'lib/playroom/components.ts',
  playroomThemes: 'lib/themes/index.ts',
  playroomFrameComponent: 'lib/playroom/FrameComponent.tsx',
  playroomTarget: 'site/dist/playroom',
};
