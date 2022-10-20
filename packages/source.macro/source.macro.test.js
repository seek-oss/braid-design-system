// eslint-disable-next-line import/no-unresolved
const { default: pluginTester } = require('babel-plugin-tester');
const plugin = require('babel-plugin-macros');

pluginTester({
  plugin,
  pluginName: 'source.macro',
  snapshot: true,
  tests: {
    'smoke test': {
      babelOptions: { filename: __filename },
      code: `
        import source from './source.macro';

        const result = source({
          // comment
          hello: () => 'world'
        });
      `,
    },
    'ignores types': {
      babelOptions: { filename: __filename },
      code: `
        import { Source } from './source.macro';

        const foo = 'bar';
      `,
    },
  },
});
