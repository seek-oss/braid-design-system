const browserslist = require('../../browserslist');

module.exports = {
  clientEntry: './src/lib/components/index.ts',
  rootResolution: false,
  target: './dist',
  supportedBrowsers: browserslist,
  displayNamesProd: true,
  skipPackageCompatibilityCompilation: ['lodash', 'prettier'],
};
