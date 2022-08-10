// Adapted from sku's injected jest config
// https://github.com/seek-oss/sku/blob/master/config/jest/jestConfig.js

const escapeRegex = require('escape-string-regexp');
const slash = '[/\\\\]'; // Cross-platform path delimiter regex
const compilePackages = ['sku', 'braid-design-system'];

const compilePackagesRegex = compilePackages
  .map((pkg) => `.*${escapeRegex(pkg)}`)
  .join('|');

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  setupFilesAfterEnv: ['./testConfig/setupTests.ts'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost', // @see https://github.com/facebook/jest/issues/6766,
  },
  prettierPath: require.resolve('prettier'),
  testMatch: [
    // Default values, but with 'ts' + 'tsx' support
    // (https://jestjs.io/docs/en/configuration.html#testmatch-array-string)
    '**/__tests__/**/*.(js|ts|tsx)',
    '**/?(*.)+(spec|test).(js|ts|tsx)',
  ],
  testPathIgnorePatterns: [
    `<rootDir>${slash}(.*${slash})?(dist|node_modules)${slash}`,
  ],
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|svg)$':
      require.resolve('./testConfig/fileMock'),
  },
  transform: {
    '\\.(j|t)sx?$': require.resolve('./testConfig/babelTransform.js'),
  },
  transformIgnorePatterns: [
    // Allow 'compilePackages' code to be transformed in tests by overriding
    // the default, which normally excludes everything in node_modules.
    `node_modules${slash}(?!(${compilePackagesRegex}))`,
  ],
  watchPlugins: [
    require.resolve('jest-watch-typeahead/filename'),
    require.resolve('jest-watch-typeahead/testname'),
  ],
};
