import pluginTester from 'babel-plugin-tester';
import plugin from 'babel-plugin-macros';

pluginTester({
  plugin,
  pluginName: 'source.macro',
  snapshot: true,
  tests: {
    'smoke test': {
      babelOptions: { filename: __filename },
      code: `
      import source from './source.macro'

      const result = source({
        // comment
        hello: () => 'world'
      });
    `,
    },
  },
});
