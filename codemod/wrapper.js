require('@babel/register')({
  only: [/braid-design-system\/codemod/],
  ignore: [],
  presets: [
    ['@babel/preset-env', { modules: 'cjs', targets: { node: 'current' } }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  extensions: ['.ts', '.tsx'],
});

const workerpool = require('workerpool');

workerpool.worker({
  codemod: require('./codemod.ts').default,
});
