const { TRAVIS_BRANCH, TRAVIS_PULL_REQUEST_SHA } = process.env;
const isGitHubPages = TRAVIS_BRANCH === 'master' && !TRAVIS_PULL_REQUEST_SHA;

const ref = TRAVIS_PULL_REQUEST_SHA || 'master';
const sourcePrefix = `https://github.com/seek-oss/braid-design-system/tree/${ref}`;

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
    },
    SOURCE_PREFIX: {
      development: sourcePrefix,
      production: sourcePrefix
    }
  }
};
