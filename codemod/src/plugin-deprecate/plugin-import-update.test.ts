import pluginTester from 'babel-plugin-tester';
import dedent from 'dedent';

import plugin from './plugin-import-update';

const tests: Parameters<typeof pluginTester>[0]['tests'] = [
  {
    title: 'Updates component import path with single import',
    code: dedent`
      import { BraidTestProvider } from 'braid-design-system';
      import { foo } from 'other-package';
    `,
    output: dedent`
      import { BraidTestProvider } from 'braid-design-system/test';
      import { foo } from 'other-package';
    `,
  },
  {
    title: 'Skip matching component import from non-Braid package',
    code: dedent`
      import { BraidTestProvider } from 'other-package';
    `,
    output: dedent`
      import { BraidTestProvider } from 'other-package';
    `,
  },
  {
    title:
      'Moves component to separate import when multiple things are imported',
    code: dedent`
      import { vars, BraidTestProvider } from 'braid-design-system';
      import { foo } from 'other-package';
    `,
    output: dedent`
      import { vars } from 'braid-design-system';
      import { BraidTestProvider } from 'braid-design-system/test';
      import { foo } from 'other-package';
    `,
  },
  {
    title: 'Handle import aliasing of component',
    code: dedent`
      import { vars, BraidTestProvider as TestProvider } from 'braid-design-system';
      import { foo } from 'other-package';
    `,
    output: dedent`
      import { vars } from 'braid-design-system';
      import { BraidTestProvider as TestProvider } from 'braid-design-system/test';
      import { foo } from 'other-package';
    `,
  },
];

pluginTester({
  pluginName: 'babel-plugin-import-update',
  plugin,
  babelOptions: {
    filename: 'test-file.tsx',
    plugins: [
      '@babel/plugin-syntax-jsx',
      ['@babel/plugin-syntax-typescript', { isTSX: true }],
    ],
  },
  tests,
});
