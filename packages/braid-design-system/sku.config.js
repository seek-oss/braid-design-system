const browserslist = require('../../browserslist');

const isGitHubPages = Boolean(process.env.IS_GITHUB_PAGES);

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
  setupTests: '../../testConfig/setupTests.ts',
  displayNamesProd: true,
  skipPackageCompatibilityCompilation: ['lodash', 'prettier'],
};
