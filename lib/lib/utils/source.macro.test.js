import pluginTester from 'babel-plugin-tester';
import plugin from 'babel-plugin-macros';
pluginTester({
  plugin: plugin,
  pluginName: 'source.macro',
  snapshot: true,
  tests: {
    'smoke test': {
      babelOptions: {
        filename: __filename
      },
      code: "\n        import source from './source.macro'\n\n        const result = source({\n          // comment\n          hello: () => 'world'\n        });\n      "
    },
    'ignores types': {
      babelOptions: {
        filename: __filename
      },
      code: "\n        import { Source } from './source.macro'\n\n        const foo = 'bar';\n      "
    }
  }
});