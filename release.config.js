// semantic-release configuration
module.exports = {
  // Avoid all default success plugins to avoid commenting on PRs
  // https://github.com/semantic-release/semantic-release/blob/caribou/docs/usage/configuration.md#success
  success: false,

  // Formalise our current alpha release strategy — ensuring every release
  // is a patch at this stage. Allows developers to semantically convey
  // the scope and type of change pre v1.0.0
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
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
      },
    ],
  ],
};
