const {
  setupFilesAfterEnv,
  testPathIgnorePatterns,
  ...rootJestConfig
} = require('../jest.config');

/** @type {import('jest').Config} */
module.exports = {
  ...rootJestConfig,
  displayName: 'integration',
  rootDir: __dirname,
};
