const makeWebpackConfig = require('./lib/playroom/makeWebpackConfig');

module.exports = {
  title: 'BRAID',
  outputPath: './docs/dist/playroom',
  components: './lib/components/index.ts',
  themes: './lib/themes/index.ts',
  frameComponent: './lib/playroom/FrameComponent.js',
  widths: [320, 1024],
  webpackConfig: () => makeWebpackConfig()
};
