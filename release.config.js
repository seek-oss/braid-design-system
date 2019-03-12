// semantic-release configuration

// Formalise our current alpha release strategy — ensuring every release
// is a patch at this stage. Allows developers to semantically convey
// the scope and type of change pre v1.0.0
const commitAnalyzerConfig = {
  preset: 'angular',
  releaseRules: [
    {
      breaking: true,
      release: 'patch',
    },
    {
      type: 'feat',
      release: 'patch',
    },
    {
      type: 'fix',
      release: 'patch',
    },
  ],
};

module.exports = {
  // Avoid all default success plugins to avoid commenting on PRs
  // https://github.com/semantic-release/semantic-release/blob/caribou/docs/usage/configuration.md#success
  success: false,

  // Use the default plugin lifecycle with the addition of our
  // custom commit-analyzer-config. See default plugin list here:
  // https://github.com/semantic-release/semantic-release/blob/master/lib/get-config.js#L72
  plugins: [
    ['@semantic-release/commit-analyzer', commitAnalyzerConfig],
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
};
