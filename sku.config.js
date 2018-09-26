module.exports = {
  srcPaths: ['lib', 'docs/src'],
  entry: {
    client: 'docs/src/client.js',
    render: 'docs/src/render.js'
  },
  publicPath: '/',
  target: 'docs/dist'
};
