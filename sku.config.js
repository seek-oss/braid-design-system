const routes = require('./sku.routes.js');

const isGitHubPages = Boolean(process.env.IS_GITHUB_PAGES);

const entries = Boolean(process.env.DEBUG_IE)
  ? {
      clientEntry: './site/src/IE-debug/client.tsx',
      renderEntry: './site/src/IE-debug/render.tsx',
    }
  : {
      clientEntry: './site/src/client.tsx',
      renderEntry: './site/src/render.tsx',
    };

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
  ...entries,
  routes,
  public: './site/src/public',
  target: './site/dist',
  publicPath: isGitHubPages ? '/braid-design-system/' : '/',
  setupTests: './setupTests.ts',
  displayNamesProd: true,
  provideDefaultChromaticViewports: false,
  playroomTitle: 'BRAID',
  playroomComponents: './lib/playroom/components.ts',
  playroomSnippets: './lib/playroom/snippets.ts',
  playroomThemes: './lib/themes/index.ts',
  playroomFrameComponent: './lib/playroom/FrameComponent.tsx',
  playroomTarget: './site/dist/playroom',
  playroomWidths: [320, 768, 1024, 1400],
};
