import pluginTester from 'babel-plugin-tester';
import dedent from 'dedent';

import plugin from './plugin-deprecate-atoms';

const tests: Parameters<typeof pluginTester>[0]['tests'] = [
  {
    title: 'Visit Braid atoms calls',
    code: dedent`
      import { atoms } from 'braid-design-system/css';
      const className = atoms({
        top: 0,
        boxShadow: 'borderStandard',
      });`,
    output: dedent`
      import { atoms } from 'braid-design-system/css';
      const className = atoms({
        top: 0,
        boxShadow: 'borderNeutralLight',
      });`,
  },
  {
    title: 'Visit Braid aliased atoms calls',
    code: dedent`
      import { atoms as sprinkles } from 'braid-design-system/css';
      const className = sprinkles({
        top: 0,
        boxShadow: 'borderStandard',
      });`,
    output: dedent`
      import { atoms as sprinkles } from 'braid-design-system/css';
      const className = sprinkles({
        top: 0,
        boxShadow: 'borderNeutralLight',
      });`,
  },
  {
    title: 'Visit Braid atoms calls with no deprecations',
    code: dedent`
      import { atoms } from 'braid-design-system/css';
      const className = atoms({
        top: 0,
        border: '0',
      });`,
    output: dedent`
      import { atoms } from 'braid-design-system/css';
      const className = atoms({
        top: 0,
        border: '0',
      });`,
  },
  {
    title: 'Visit Braid atoms calls using rest spread',
    code: dedent`
      import { atoms } from 'braid-design-system/css';
      const atomProps = {
        ['boxShadow']: ['borderStandard', 'borderFormHover'],
      };
      const className = atoms({
        top: 0,
        ...atomProps,
      });`,
    output: dedent`
      import { atoms } from 'braid-design-system/css';
      const atomProps = {
        ['boxShadow']: ['borderNeutralLight', 'borderFormAccent'],
      };
      const className = atoms({
        top: 0,
        ...atomProps,
      });`,
  },
  {
    title: 'Visit Braid atoms calls using an identifier in object literals',
    code: dedent`
      import { atoms as sprinkles } from 'braid-design-system/css';
      const standardBorder = 'borderStandard';
      const hoverBorder = 'borderFormHover';
      const borderColor = true ? standardBorder : hoverBorder;
      const className = sprinkles({
        top: 0,
        boxShadow: borderColor,
      });`,
    output: dedent`
      import { atoms as sprinkles } from 'braid-design-system/css';
      const standardBorder = 'borderNeutralLight';
      const hoverBorder = 'borderFormAccent';
      const borderColor = true ? standardBorder : hoverBorder;
      const className = sprinkles({
        top: 0,
        boxShadow: borderColor,
      });`,
  },
  {
    title: 'Visit Braid atoms calls using an identifier as the argument',
    code: dedent`
      import { atoms as sprinkles } from 'braid-design-system/css';
      const standardBorder = 'borderStandard';
      const hoverBorder = 'borderFormHover';
      const borderColor = true ? standardBorder : hoverBorder;
      const properties = {
        top: 0,
        boxShadow: borderColor,
      };
      const className = sprinkles(properties);`,
    output: dedent`
      import { atoms as sprinkles } from 'braid-design-system/css';
      const standardBorder = 'borderNeutralLight';
      const hoverBorder = 'borderFormAccent';
      const borderColor = true ? standardBorder : hoverBorder;
      const properties = {
        top: 0,
        boxShadow: borderColor,
      };
      const className = sprinkles(properties);`,
  },
  {
    title: 'Visit Braid atom calls with conditional values',
    code: dedent`
      import { atoms } from 'braid-design-system/css';
      const className = atoms({
        top: 0,
        boxShadow: {
          mobile: 'borderStandard',
          desktop: 'borderFormHover',
        },
      });`,
    output: dedent`
      import { atoms } from 'braid-design-system/css';
      const className = atoms({
        top: 0,
        boxShadow: {
          mobile: 'borderNeutralLight',
          desktop: 'borderFormAccent',
        },
      });`,
  },
  {
    title: 'Visit Braid atoms calls with responsive array conditions',
    code: dedent`
      import { atoms } from 'braid-design-system/css';
      const className = atoms({
        top: 0,
        boxShadow: ['borderStandard', 'borderFormHover'],
      });`,
    output: dedent`
      import { atoms } from 'braid-design-system/css';
      const className = atoms({
        top: 0,
        boxShadow: ['borderNeutralLight', 'borderFormAccent'],
      });`,
  },
];

pluginTester({
  pluginName: 'babel-plugin-deprecate-atoms',
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
