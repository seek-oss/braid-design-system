const { decorateClientConfig } = require('./lib/webpack');

module.exports = {
  title: 'BRAID',
  outputPath: './docs/dist/playroom',
  components: './lib/components',
  themes: './lib/themes',
  frameComponent: './lib/playroom/FrameComponent.js',
  widths: [320, 1024],
  exampleCode: ``,
  webpackConfig: () => decorateClientConfig()
};
