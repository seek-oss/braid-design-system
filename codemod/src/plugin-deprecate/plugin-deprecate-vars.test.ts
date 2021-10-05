import pluginTester from 'babel-plugin-tester';
import dedent from 'dedent';

import plugin from './plugin-deprecate-vars';

const tests: Parameters<typeof pluginTester>[0]['tests'] = [
  {
    title: 'Visit Braid theme vars',
    code: dedent`
      import { vars } from 'braid-design-system/css';
      const className = style({
        border: vars.borderColor.standard,
      });`,
    output: dedent`
      import { vars } from 'braid-design-system/css';
      const className = style({
        border: vars.borderColor.neutralLight,
      });`,
  },
  {
    title: 'Visit Braid theme vars when aliased',
    code: dedent`
      import { vars as themeVars } from 'braid-design-system/css';
      const className = style({
        border: themeVars.borderColor.standard,
      });`,
    output: dedent`
      import { vars as themeVars } from 'braid-design-system/css';
      const className = style({
        border: themeVars.borderColor.neutralLight,
      });`,
  },
  {
    title: 'Visit Braid theme vars in variables',
    code: dedent`
      import { vars } from 'braid-design-system/css';
      const border = vars.borderColor;
      const className = style({
        border: border.standard,
      });`,
    output: dedent`
      import { vars } from 'braid-design-system/css';
      const border = vars.borderColor;
      const className = style({
        border: border.neutralLight,
      });`,
  },
  {
    title: 'Visit Braid theme vars using destructuring',
    code: dedent`
      import { vars } from 'braid-design-system/css';
      const { borderColor, space, ...rest } = vars;
      const className = style({
        border: borderColor.standard,
      });`,
    output: dedent`
      import { vars } from 'braid-design-system/css';
      const { borderColor, space, ...rest } = vars;
      const className = style({
        border: borderColor.neutralLight,
      });`,
  },
  {
    title: 'Visit Braid theme vars using destructuring with aliasing',
    code: dedent`
      import { vars } from 'braid-design-system/css';
      const { borderColor: border, space, ...rest } = vars;
      const className = style({
        border: border.standard,
      });`,
    output: dedent`
      import { vars } from 'braid-design-system/css';
      const { borderColor: border, space, ...rest } = vars;
      const className = style({
        border: border.neutralLight,
      });`,
  },
  {
    title: 'Visit Braid theme vars using destructuring via rest spread',
    code: dedent`
      import { vars } from 'braid-design-system/css';
      const { space, ...rest } = vars;
      const className = style({
        border: rest.borderColor.standard,
      });`,
    output: dedent`
      import { vars } from 'braid-design-system/css';
      const { space, ...rest } = vars;
      const className = style({
        border: rest.borderColor.neutralLight,
      });`,
  },
  {
    title:
      'Visit Braid theme vars destructuring multiple vars and using rest spread',
    code: dedent`
      import { vars } from 'braid-design-system/css';
      const { space, backgroundColor, ...rest } = vars;
      const bg = backgroundColor.card;
      const className = style({
        border: rest.borderColor.standard,
        background: bg,
      });`,
    output: dedent`
      import { vars } from 'braid-design-system/css';
      const { space, backgroundColor, ...rest } = vars;
      const bg = backgroundColor.surface;
      const className = style({
        border: rest.borderColor.neutralLight,
        background: bg,
      });`,
  },
  {
    title: 'Visit Braid theme vars using dynamic keys in object literals',
    code: dedent`
      import { vars } from 'braid-design-system/css';
      const className = style({
        border: vars['borderColor'].standard,
      });`,
    output: dedent`
      import { vars } from 'braid-design-system/css';
      const className = style({
        border: vars['borderColor'].neutralLight,
      });`,
  },
];

pluginTester({
  pluginName: 'babel-plugin-deprecate-vars',
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
