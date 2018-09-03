module.exports = {
  entry: {
    client: 'docs/src/client.js',
    render: 'docs/src/render.js'
  },
  publicPath: '/',
  target: 'docs/dist',
  // TODO: Add proper support for this hack in sku
  compilePackages: ['../docs/src']
};
