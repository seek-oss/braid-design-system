const browserslist = require('../../browserslist');

/** @type {import("sku").SkuConfig} */
module.exports = {
  clientEntry: './src/lib/components/index.ts',
  rootResolution: false,
  supportedBrowsers: browserslist,
  displayNamesProd: true,
  skipPackageCompatibilityCompilation: ['lodash', 'prettier'],
  storybookStoryStore: false,
};
