import pluginTester from 'babel-plugin-tester';
import plugin from 'babel-plugin-macros';

pluginTester({
  plugin,
  pluginName: 'source.macro',
  snapshot: true,
  babelOptions: {
    filename: 'dummy.tsx',
    plugins: [
      require.resolve('@babel/plugin-syntax-jsx'),
      [require.resolve('@babel/plugin-syntax-typescript'), { isTSX: true }],
    ],
  },
  tests: {
    'smoke test': {
      code: /* ts */ `
        import source from './source.macro';

        const result = source({
          // comment
          hello: () => 'world'
        });
      `,
    },
    'react component': {
      code: /* ts */ `
        import source from './source.macro';

        const result = source(
          <div />
        );
      `,
    },
    'ignores types': {
      code: /* ts */ `
        import type { Source } from './source.macro';

        const foo = 'bar';
      `,
    },
    'with new lines': {
      code: /* ts */ `
        import source from './source.macro';

        const options = source(() => {
          sideEffect();

          return [
            { value: "1", label: "Option 1" },
            { value: "2", label: "Option 2" },
            { value: "3", label: "Option 3" },
          ];
        });
      `,
    },
    'code only': {
      pluginOptions: { source: { codeOnly: true } },
      code: /* ts */ `
        import source from './source.macro';

        const result = source({
          hello: () => 'world',
          some: 'value',
        });
      `,
    },
  },
});
