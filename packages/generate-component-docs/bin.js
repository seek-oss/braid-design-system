require('esbuild'); // depcheck doesn't know it's used by esbuild-register
const { register } = require('esbuild-register/dist/node');

register({
  target: 'node14',
});

require('./src/index.ts');
