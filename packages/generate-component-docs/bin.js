const { register } = require('esbuild-register/dist/node');

register({
  target: 'node14',
});

require('./src/index.ts');
