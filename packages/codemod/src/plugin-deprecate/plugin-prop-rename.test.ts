import pluginTester from 'babel-plugin-tester';
import dedent from 'dedent';

import { v31_11 } from './deprecationMaps/v31-11';
import plugin from './plugin-prop-rename';

const tests: Parameters<typeof pluginTester>[0]['tests'] = [
  {
    title: 'Visit Braid component only',
    code: dedent`
    import { Button } from 'not-braid';
    import { Button as BraidButton } from 'braid-design-system';
    export default () => {
      return (
        <>
          <Button bleedY>Button</Button>
          <BraidButton bleedY>Button</BraidButton>
        </>
      );
    };`,
    output: dedent`
    import { Button } from 'not-braid';
    import { Button as BraidButton } from 'braid-design-system';
    export default () => {
      return (
        <>
          <Button bleedY>Button</Button>
          <BraidButton bleed>Button</BraidButton>
        </>
      );
    };`,
  },
  {
    title: 'Updates renamed attribute only',
    code: dedent`
    import { Button } from 'braid-design-system';
    export default () => {
      return (
        <Button variant="soft" bleedY="true">
          Button
        </Button>
      );
    };`,
    output: dedent`
    import { Button } from 'braid-design-system';
    export default () => {
      return (
        <Button variant="soft" bleed="true">
          Button
        </Button>
      );
    };`,
  },
  {
    title: 'Updates renamed attributes from inline spread',
    code: dedent`
    import { Button } from 'braid-design-system';
    export default () => (
      <Button
        {...{
          variant: 'soft',
          bleedY: true,
        }}
      >
        Button
      </Button>
    );`,
    output: dedent`
    import { Button } from 'braid-design-system';
    export default () => (
      <Button
        {...{
          variant: 'soft',
          bleed: true,
        }}
      >
        Button
      </Button>
    );`,
  },
  {
    title: 'Updates renamed attributes spread from variable',
    code: dedent`
    import { Button } from 'braid-design-system';
    export default () => {
      const props = {
        variant: 'soft',
        bleedY: true,
      };
      return <Button {...props}>Button</Button>;
    };`,
    output: dedent`
    import { Button } from 'braid-design-system';
    export default () => {
      const props = {
        variant: 'soft',
        bleed: true,
      };
      return <Button {...props}>Button</Button>;
    };`,
  },
  {
    title: 'Updates renamed attributes spread from function call',
    code: dedent`
    import { Button } from 'braid-design-system';
    export default () => {
      const props = () => ({
        variant: 'soft',
        bleedY: true,
      });

      return <Button {...props()}>Button</Button>;
    };`,
    output: dedent`
    import { Button } from 'braid-design-system';
    export default () => {
      const props = () => ({
        variant: 'soft',
        bleed: true,
      });

      return <Button {...props()}>Button</Button>;
    };`,
  },
  {
    title: 'Updates renamed attributes with computed keys',
    code: dedent`
    import { Button } from 'braid-design-system';
    export default () => {
      const props = () => ({
        variant: 'soft',
        ['bleedY']: true,
      });

      return <Button {...props()}>Button</Button>;
    };`,
    output: dedent`
    import { Button } from 'braid-design-system';
    export default () => {
      const props = () => ({
        variant: 'soft',
        ['bleed']: true,
      });

      return <Button {...props()}>Button</Button>;
    };`,
  },
  {
    title: 'Updates renamed attributes for namespaced elements',
    code: dedent`
    import * as Braid from 'braid-design-system';
    export default () => {
      const props = () => ({
        variant: 'soft',
        ['bleedY']: true,
      });

      return <Braid.Button {...props()}>Button</Braid.Button>;
    };`,
    output: dedent`
    import * as Braid from 'braid-design-system';
    export default () => {
      const props = () => ({
        variant: 'soft',
        ['bleed']: true,
      });

      return <Braid.Button {...props()}>Button</Braid.Button>;
    };`,
  },
  {
    title: 'Updates renamed attributes for elements renamed locally',
    code: dedent`
    import { Button as Boo } from 'braid-design-system';
    export default () => {
      const props = () => ({
        variant: 'soft',
        ['bleedY']: true,
      });

      return <Boo {...props()}>Button</Boo>;
    };`,
    output: dedent`
    import { Button as Boo } from 'braid-design-system';
    export default () => {
      const props = () => ({
        variant: 'soft',
        ['bleed']: true,
      });

      return <Boo {...props()}>Button</Boo>;
    };`,
  },
  {
    title: 'Updates deeply nested opening element',
    code: dedent`
    import { Button } from 'braid-design-system';

    const Component = () => (
      <ParentComponent
        propName={() => (
          <Layout space="small" align="center">
            <Button
              bleedY
              onClick={() => {
                onReloadClick();
              }}
              variant="ghost"
              tone="neutral"
              data={{
                testid: 'reload-jdv',
              }}
            >
              Reload this job
            </Button>
          </Layout>
        )}
      />
    );

    export default Component;`,
    output: dedent`
    import { Button } from 'braid-design-system';

    const Component = () => (
      <ParentComponent
        propName={() => (
          <Layout space="small" align="center">
            <Button
              bleed
              onClick={() => {
                onReloadClick();
              }}
              variant="ghost"
              tone="neutral"
              data={{
                testid: 'reload-jdv',
              }}
            >
              Reload this job
            </Button>
          </Layout>
        )}
      />
    );

    export default Component;`,
  },
];

pluginTester({
  pluginName: 'babel-plugin-braid-update-prop',
  plugin,
  pluginOptions: { renames: v31_11 },
  babelOptions: {
    filename: 'test-file.tsx',
    plugins: [
      '@babel/plugin-syntax-jsx',
      ['@babel/plugin-syntax-typescript', { isTSX: true }],
    ],
  },
  tests,
});
