const browserslist = require('../../browserslist');

module.exports = {
  srcPaths: [
    './color-mode',
    './css',
    './lib',
    './reset',
    './scripts',
    './test',
    './themes',
  ],
  clientEntry: './lib/components/index.ts',
  rootResolution: false,
  target: './dist',
  supportedBrowsers: browserslist,
  displayNamesProd: true,
  skipPackageCompatibilityCompilation: ['lodash', 'prettier'],
};
