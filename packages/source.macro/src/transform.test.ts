import dedent from 'dedent';
import { describe, expect, it } from 'vitest';

import { transformSourceMacro } from './transform.ts';

const transform = (
  code: string,
  options?: Parameters<typeof transformSourceMacro>[1],
) =>
  transformSourceMacro(dedent(code), {
    filename: 'dummy.tsx',
    ...options,
  }).then((result) => result.code);

describe('transformSourceMacro', () => {
  it('smoke test', async () => {
    const code = `
      import source from '@braid-design-system/source.macro';

      const result = source({
        // comment
        hello: () => 'world'
      });
    `;

    expect(await transform(code)).toMatchInlineSnapshot(`
      "
      const result = { code: "{\\n  // comment\\n  hello: () => \\"world\\",\\n}", value: {
        // comment
        hello: () => 'world'
      } };"
    `);
  });

  it('react component', async () => {
    const code = `
      import source from '@braid-design-system/source.macro';

      const result = source(
        <div />
      );
    `;

    expect(await transform(code)).toMatchInlineSnapshot(`
      "
      const result = { code: "<div />", value: <div /> };"
    `);
  });

  it('with new lines', async () => {
    const code = `
      import source from '@braid-design-system/source.macro';

      const options = source(() => {
        sideEffect();

        return [
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ];
      });
    `;

    expect(await transform(code)).toMatchInlineSnapshot(`
      "
      const options = { code: "() => {\\n  sideEffect()\\n\\n  return [\\n    { value: \\"1\\", label: \\"Option 1\\" },\\n    { value: \\"2\\", label: \\"Option 2\\" },\\n    { value: \\"3\\", label: \\"Option 3\\" },\\n  ]\\n}", value: () => {
        sideEffect();

        return [
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ];
      } };"
    `);
  });

  it('code only', async () => {
    const code = `
      import source from '@braid-design-system/source.macro';

      const result = source({
        hello: () => ({ world: '!', foo: 'bar'}),
      });
    `;

    expect(await transform(code, { codeOnly: true })).toMatchInlineSnapshot(`
      "
      const result = "{\\n  hello: () => ({ world: \\"!\\", foo: \\"bar\\" }),\\n}";"
    `);
  });

  it('JSX with playroom state', async () => {
    const code = `
      import source from '@braid-design-system/source.macro';
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
    `;

    expect(await transform(code)).toMatchInlineSnapshot(`
      "const result =
        <Code>
          {({ setDefaultState, getState: getStateUntyped }) => {
            const getState = getStateUntyped as (key: string) => MockJob[];
            return { code: "<>\\n  {setDefaultState(\\"jobs\\", [\\n    {\\n      id: 1,\\n      title: \\"Lead Designer\\",\\n      location: \\"Melbourne\\",\\n    },\\n    {\\n      id: 2,\\n      title: \\"Senior Developer\\",\\n      location: \\"Sydney\\",\\n    },\\n    {\\n      id: 3,\\n      title: \\"Product Manager\\",\\n      location: \\"Canberra\\",\\n    },\\n  ])}\\n\\n  <Stack space=\\"medium\\">\\n    {getState(\\"jobs\\").map((job) => (\\n      <Card key={job.id}>\\n        <Stack space=\\"small\\">\\n          <Text weight=\\"strong\\">{job.title}</Text>\\n          <Text>{job.location}</Text>\\n        </Stack>\\n      </Card>\\n    ))}\\n  </Stack>\\n</>", value: <>
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
              </> };
          }}
        </Code>;"
    `);
  });

  it('supports the named export', async () => {
    expect(
      await transform(`
        import { source } from '@braid-design-system/source.macro';
        const result = source(<div />);
      `),
    ).toMatchInlineSnapshot(
      `"const result = { code: "<div />", value: <div /> };"`,
    );
  });

  it('removes type imports', async () => {
    const code = `
      import type { Source } from '@braid-design-system/source.macro';

      const foo = 'bar';
    `;

    expect(await transform(code)).toMatchInlineSnapshot(`
      "
      const foo = 'bar';"
    `);
  });

  it('removes type specifiers from value imports', async () => {
    expect(
      await transform(`
        import source, { type Source } from '@braid-design-system/source.macro';
        const result: Source<string> = source('hi');
      `),
    ).toMatchInlineSnapshot(
      `"const result: Source<string> = { code: "\\"hi\\"", value: 'hi' };"`,
    );
  });

  it('wraps objects returned from arrow functions in parentheses', async () => {
    expect(
      await transform(`
        import { source } from '@braid-design-system/source.macro';
        export const Example = () => source(<div />);
      `),
    ).toMatchInlineSnapshot(
      `"export const Example = () => ({ code: "<div />", value: <div /> });"`,
    );
  });

  it('does not wrap code strings returned from arrow functions in parentheses', async () => {
    expect(
      await transform(
        `
          import { source } from '@braid-design-system/source.macro';
          export const Example = () => source(<div />);
        `,
        { codeOnly: true },
      ),
    ).toMatchInlineSnapshot(`"export const Example = () => "<div />";"`);
  });

  it('handles macro calls without arguments', async () => {
    expect(
      await transform(`
        import { source } from '@braid-design-system/source.macro';
        const result = source();
      `),
    ).toMatchInlineSnapshot(
      `"const result = { code: "undefined", value: undefined };"`,
    );
  });

  it('handles nested macro calls', async () => {
    expect(
      await transform(
        `
          import { source } from '@braid-design-system/source.macro';
          const result = source({ inner: source(<div />) });
        `,
      ),
    ).toMatchInlineSnapshot(
      `"const result = { code: "{ inner: source(<div />) }", value: { inner: { code: "<div />", value: <div /> } } };"`,
    );
  });

  it('handles multiple calls', async () => {
    expect(
      await transform(`
        import { source } from '@braid-design-system/source.macro';
        const a = source(1);
        const b = source('b');
      `),
    ).toMatchInlineSnapshot(`
      "const a = { code: "1", value: 1 };
      const b = { code: "\\"b\\"", value: 'b' };"
    `);
  });

  it('ignores files that do not import the macro', async () => {
    const code = 'const source = (x) => x; source(1);';

    expect(await transform(code)).toBe(code);
  });

  it('ignores imports from other packages', async () => {
    const code = "import { source } from 'other';\nsource(1);";

    expect(await transform(code)).toBe(code);
  });

  it('throws on invalid code', async () => {
    await expect(
      transform('const = ;'),
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `[Error: Failed to parse dummy.tsx: Unexpected token]`,
    );
  });

  it('generates a source map', async () => {
    const { map } = await transformSourceMacro(
      "import { source } from '@braid-design-system/source.macro';\nsource(1);",
      { filename: 'dummy.tsx' },
    );

    expect(map.sources).toEqual(['dummy.tsx']);
    expect(map.mappings).not.toBe('');
  });
});
