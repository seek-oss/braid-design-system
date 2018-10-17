module.exports = {
  srcPaths: ['lib', 'docs/src', 'scripts'],
  entry: {
    client: 'docs/src/client.js',
    render: 'docs/src/render.js'
  },
  public: 'docs/src/public',
  target: 'docs/dist',
  publicPath: '/braid-design-system/',
  env: {
    ROUTER_BASENAME: {
      development: '',
      production: 'braid-design-system'
    }
  }
};
