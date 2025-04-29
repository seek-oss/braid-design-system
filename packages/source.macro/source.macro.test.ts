import plugin from 'babel-plugin-macros';
import pluginTester from 'babel-plugin-tester';

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
          hello: () => ({ world: '!', foo: 'bar'}),
        });
      `,
    },
    'JSX with playroom state': {
      code: /* ts */ `
        import source from './source.macro';
        const result =
          <Code>
            {({ setDefaultState, getState: getStateUntyped }) => {
              const getState = getStateUntyped as (key: string) => MockJob[];
              return source(
                <>
                  {setDefaultState('jobs', [
                    {
                      id: 1,
                      title: 'Lead Designer',
                      location: 'Melbourne',
                    },
                    {
                      id: 2,
                      title: 'Senior Developer',
                      location: 'Sydney',
                    },
                    {
                      id: 3,
                      title: 'Product Manager',
                      location: 'Canberra',
                    },
                  ])}

                  <Stack space="medium">
                    {getState('jobs').map((job) => (
                      <Card key={job.id}>
                        <Stack space="small">
                          <Text weight="strong">{job.title}</Text>
                          <Text>{job.location}</Text>
                        </Stack>
                      </Card>
                    ))}
                  </Stack>
                </>,
              );
            }}
          </Code>;
      `,
    },
    'allows disabling prettier formatting': {
      pluginOptions: { source: { formatWithPrettier: false } },
      code: /* ts */ `
        import source from './source.macro';
        const result =
          <Code>
            {({ setDefaultState, getState: getStateUntyped }) => {
              const getState = getStateUntyped as (key: string) => MockJob[];
              return source(
                <>
                  {setDefaultState('jobs', [
                    {
                      id: 1,
                      title: 'Lead Designer',
                      location: 'Melbourne',
                    },
                    {
                      id: 2,
                      title: 'Senior Developer',
                      location: 'Sydney',
                    },
                    {
                      id: 3,
                      title: 'Product Manager',
                      location: 'Canberra',
                    },
                  ])}

                  <Stack space="medium">
                    {getState('jobs').map((job) => (
                      <Card key={job.id}>
                        <Stack space="small">
                          <Text weight="strong">{job.title}</Text>
                          <Text>{job.location}</Text>
                        </Stack>
                      </Card>
                    ))}
                  </Stack>
                </>,
                { formatWithPrettier: false });
            }}
          </Code>;
      `,
    },
  },
});
