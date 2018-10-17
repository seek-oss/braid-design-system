const isGitHubPages =
  process.env.TRAVIS_BRANCH === 'master' &&
  !process.env.TRAVIS_PULL_REQUEST_SHA;

module.exports = {
  srcPaths: ['lib', 'docs/src', 'scripts'],
  entry: {
    client: 'docs/src/client.js',
    render: 'docs/src/render.js'
  },
  public: 'docs/src/public',
  target: 'docs/dist',
  publicPath: isGitHubPages ? '/braid-design-system/' : '/',
  env: {
    ROUTER_BASENAME: {
      development: '',
      production: isGitHubPages ? 'braid-design-system' : ''
    }
  }
};
