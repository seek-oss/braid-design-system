const browserslist = require('../../browserslist');

module.exports = {
  clientEntry: './src/lib/components/index.ts',
  rootResolution: false,
  supportedBrowsers: browserslist,
  displayNamesProd: true,
  skipPackageCompatibilityCompilation: ['lodash', 'prettier'],
};
