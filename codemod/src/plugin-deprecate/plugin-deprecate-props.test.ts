import pluginTester from 'babel-plugin-tester';
import dedent from 'dedent';

import plugin from './plugin-deprecate-props';

const tests: Parameters<typeof pluginTester>[0]['tests'] = [
  {
    title: 'Visit Braid component only',
    code: dedent`
    import { Box } from 'braid-design-system';
    export default () => {
      return (
        <div background="card">
          <Box background="card" boxShadow="borderStandard" />
        </div>
      );
    };`,
    output: dedent`
    import { Box } from 'braid-design-system';
    export default () => {
      return (
        <div background="card">
          <Box background="surface" boxShadow="borderNeutralLight" />
        </div>
      );
    };`,
  },
  {
    title: 'Visit Braid aliased component only',
    code: dedent`
    import { Box as BraidBox } from 'braid-design-system';
    export default () => {
      return (
        <div background="card">
          <BraidBox background="card" boxShadow="borderStandard" />
        </div>
      );
    };`,
    output: dedent`
    import { Box as BraidBox } from 'braid-design-system';
    export default () => {
      return (
        <div background="card">
          <BraidBox background="surface" boxShadow="borderNeutralLight" />
        </div>
      );
    };`,
  },
  {
    title: 'Visit Braid component used as a member expression',
    code: dedent`
    import * as Braid from 'braid-design-system';
    import Box from 'braid-design-system2';
    export default () => {
      return (
        <div background="card">
          <Braid.Box background="card" boxShadow="borderStandard" />
          <Box background="card" boxShadow="borderStandard" />
        </div>
      );
    };`,
    output: dedent`
    import * as Braid from 'braid-design-system';
    import Box from 'braid-design-system2';
    export default () => {
      return (
        <div background="card">
          <Braid.Box background="surface" boxShadow="borderNeutralLight" />
          <Box background="card" boxShadow="borderStandard" />
        </div>
      );
    };`,
  },
  {
    title: 'Don’t visit components from other packages',
    code: dedent`
    import { Box } from 'other-package';
    export default () => {
      return (
        <div background="card">
          <Box background="card" boxShadow="borderStandard" />
        </div>
      );
    };`,
    output: dedent`
    import { Box } from 'other-package';
    export default () => {
      return (
        <div background="card">
          <Box background="card" boxShadow="borderStandard" />
        </div>
      );
    };`,
  },
  {
    title:
      'Visit Braid component where non-deprecated props preceed a deprecated prop in the prop list',
    code: dedent`
    import { Box } from 'braid-design-system';
    export default () => {
      return (
        <div background="card">
          <Box className="stylez" background={true ? 'card' : 'body'} />
        </div>
      );
    };`,
    output: dedent`
    import { Box } from 'braid-design-system';
    export default () => {
      return (
        <div background="card">
          <Box className="stylez" background={true ? 'surface' : 'body'} />
        </div>
      );
    };`,
  },
  {
    title: 'Visit Braid component using ternary as props values',
    code: dedent`
    import { Box } from 'braid-design-system';
    export default () => {
      return (
        <div background="card">
          <Box background={true ? 'card' : 'body'} />
        </div>
      );
    };`,
    output: dedent`
    import { Box } from 'braid-design-system';
    export default () => {
      return (
        <div background="card">
          <Box background={true ? 'surface' : 'body'} />
        </div>
      );
    };`,
  },
  {
    title:
      'Visit Braid component using simple template literal as props values',
    code: dedent`
    import { Box } from 'braid-design-system';
    export default () => {
      return (
        <div background="card">
          <Box background={true ? \`card\` : 'body'} />
        </div>
      );
    };`,
    output: dedent`
    import { Box } from 'braid-design-system';
    export default () => {
      return (
        <div background="card">
          <Box background={true ? \`surface\` : 'body'} />
        </div>
      );
    };`,
  },
  {
    title: 'Visit Braid component using variables as props values',
    code: dedent`
    import { Box } from 'braid-design-system';
    const bgColor = true ? 'card' : 'body';
    export default () => {
      return (
        <div background="card">
          <Box background={bgColor} boxShadow="borderStandard" />
        </div>
      );
    };`,
    output: dedent`
    import { Box } from 'braid-design-system';
    const bgColor = true ? 'surface' : 'body';
    export default () => {
      return (
        <div background="card">
          <Box background={bgColor} boxShadow="borderNeutralLight" />
        </div>
      );
    };`,
  },
  {
    title:
      'Visit Braid component using multiple layers of variables as prop values',
    code: dedent`
    import { Box } from 'braid-design-system';
    const cardBackground = 'card';
    const bodyBackground = 'body';
    const bgColor = true ? cardBackground : bodyBackground;
    export default () => {
      return (
        <div background="card">
          <Box background={bgColor} boxShadow={'borderStandard'} />
        </div>
      );
    };`,
    output: dedent`
    import { Box } from 'braid-design-system';
    const cardBackground = 'surface';
    const bodyBackground = 'body';
    const bgColor = true ? cardBackground : bodyBackground;
    export default () => {
      return (
        <div background="card">
          <Box background={bgColor} boxShadow={'borderNeutralLight'} />
        </div>
      );
    };`,
  },
  {
    title:
      'Visit Braid component spreading object as props with non-computed keys',
    code: dedent`
    import { Box } from 'braid-design-system';
    const cardBackground = 'card';
    const bodyBackground = 'body';
    const bgColor = true ? cardBackground : bodyBackground;
    const boxProps = {
      background: bgColor,
    };
    export default () => {
      return (
        <div background="card">
          <Box {...boxProps} />
        </div>
      );
    };`,
    output: dedent`
    import { Box } from 'braid-design-system';
    const cardBackground = 'surface';
    const bodyBackground = 'body';
    const bgColor = true ? cardBackground : bodyBackground;
    const boxProps = {
      background: bgColor,
    };
    export default () => {
      return (
        <div background="card">
          <Box {...boxProps} />
        </div>
      );
    };`,
  },
  {
    title:
      'Visit Braid component spreading object as props with computed string literal keys',
    code: dedent`
    import { Box } from 'braid-design-system';
    const cardBackground = 'card';
    const bodyBackground = 'body';
    const bgColor = true ? cardBackground : bodyBackground;
    const boxProps = {
      ['background']: bgColor,
    };
    export default () => {
      return (
        <div background="card">
          <Box {...boxProps} />
        </div>
      );
    };`,
    output: dedent`
    import { Box } from 'braid-design-system';
    const cardBackground = 'surface';
    const bodyBackground = 'body';
    const bgColor = true ? cardBackground : bodyBackground;
    const boxProps = {
      ['background']: bgColor,
    };
    export default () => {
      return (
        <div background="card">
          <Box {...boxProps} />
        </div>
      );
    };`,
  },
  {
    title: 'Visit Braid component spreading object literal as props',
    code: dedent`
    import { Box } from 'braid-design-system';
    const cardBackground = 'card';
    const bodyBackground = 'body';
    const bgColor = true ? cardBackground : bodyBackground;
    export default () => {
      return (
        <div background="card">
          <Box {...{
              background: bgColor,
            }}
          />
        </div>
      );
    };`,
    output: dedent`
    import { Box } from 'braid-design-system';
    const cardBackground = 'surface';
    const bodyBackground = 'body';
    const bgColor = true ? cardBackground : bodyBackground;
    export default () => {
      return (
        <div background="card">
          <Box
            {...{
              background: bgColor,
            }}
          />
        </div>
      );
    };`,
  },
];

pluginTester({
  pluginName: 'babel-plugin-braid-deprecate-props',
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
