import dedent from 'dedent';
import { rolldown } from 'rolldown';
import { describe, expect, it } from 'vitest';

import { sourceMacroPlugin } from './plugin.ts';

const bundle = async (
  code: string,
  options?: Parameters<typeof sourceMacroPlugin>[0],
) => {
  const virtualId = '\0virtual-entry.tsx';

  const build = await rolldown({
    input: virtualId,
    external: [/^@braid-design-system\/source\.macro$/],
    logLevel: 'silent',
    plugins: [
      {
        name: 'virtual-entry',
        resolveId: (id) => (id === virtualId ? id : null),
        load: (id) => (id === virtualId ? dedent(code) : null),
      },
      sourceMacroPlugin(options),
    ],
  });
  const { output } = await build.generate({ format: 'esm' });

  // Drop the `// <module id>` region comment rolldown adds for the entry module
  return output[0].code.replace(/^\/\/ .*\n/, '');
};

describe('sourceMacroPlugin', () => {
  it('replaces macro calls', async () => {
    const output = await bundle(`
      import { source } from '@braid-design-system/source.macro';
      export const result = source({ hello: 'world' });
    `);

    expect(output).toMatchInlineSnapshot(`
      "const result = {
      	code: "{ hello: \\"world\\" }",
      	value: { hello: "world" }
      };
      export { result };
      "
    `);
  });

  it('supports plugin options', async () => {
    const output = await bundle(
      `
        import source from '@braid-design-system/source.macro';
        export const result = source({ hello: 'world' });
      `,
      { codeOnly: true },
    );

    expect(output).toMatchInlineSnapshot(`
      "const result = "{ hello: \\"world\\" }";
      export { result };
      "
    `);
  });
});
