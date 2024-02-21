const { default: babelJest } = require('babel-jest');

module.exports = babelJest.createTransformer({
  babelrc: false,
  sourceType: 'module',
  presets: [
    [
      require.resolve('@babel/preset-typescript'),
      { isTSX: true, allExtensions: true },
    ],
    [
      require.resolve('@babel/preset-env'),
      { targets: 'current node', shippedProposals: true },
    ],
    [
      require.resolve('@babel/preset-react'),
      { runtime: 'automatic', development: true },
    ],
  ],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      { extensions: ['.ts', '.tsx', '.js', '.cjs', '.mjs'] },
    ],
    require.resolve('babel-plugin-macros'),
    require.resolve('@babel/plugin-transform-runtime'),
    require.resolve('babel-plugin-dynamic-import-node'),
  ],
});
