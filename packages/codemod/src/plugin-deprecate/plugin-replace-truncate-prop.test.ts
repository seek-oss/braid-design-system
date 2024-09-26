import pluginTester from 'babel-plugin-tester';
import dedent from 'dedent';
import { v33 } from './deprecationMaps/v33';

import plugin from './plugin-replace-truncate-prop';

const tests: NonNullable<Parameters<typeof pluginTester>[0]>['tests'] = [
  {
    title: 'Visit Braid component only with implicit value',
    code: dedent`
    import { Heading, Text } from 'braid-design-system';

    export default () => {
      return (
        <div>
          <Heading truncate>Some text</Heading>
          <Text truncate>Some text</Text>
        </div>
      );
    };`,
    output: dedent`
    import { Heading, Text } from 'braid-design-system';

    export default () => {
      return (
        <div>
          <Heading maxLines={1}>Some text</Heading>
          <Text maxLines={1}>Some text</Text>
        </div>
      );
    };`,
  },
  {
    title: 'Visit Braid component only with specified value',
    code: dedent`
    import { Heading, Text } from 'braid-design-system';

    export default () => {
      return (
        <div>
          <Heading truncate={true}>Some text</Heading>
          <Text truncate={true}>Some text</Text>
        </div>
      );
    };`,
    output: dedent`
    import { Heading, Text } from 'braid-design-system';

    export default () => {
      return (
        <div>
          <Heading maxLines={1}>Some text</Heading>
          <Text maxLines={1}>Some text</Text>
        </div>
      );
    };`,
  },
  {
    title: 'Visit Braid aliased component only',
    code: dedent`
    import {
      Heading as BraidHeading,
      Text as BraidText,
    } from 'braid-design-system';

    export default () => {
      return (
        <div>
          <BraidHeading truncate>Some text</BraidHeading>
          <BraidText truncate>Some text</BraidText>
        </div>
      );
    };`,
    output: dedent`
    import {
      Heading as BraidHeading,
      Text as BraidText,
    } from 'braid-design-system';

    export default () => {
      return (
        <div>
          <BraidHeading maxLines={1}>Some text</BraidHeading>
          <BraidText maxLines={1}>Some text</BraidText>
        </div>
      );
    };`,
  },
  {
    title: 'Visit Braid component used as a member expression',
    code: dedent`
    import * as Braid from 'braid-design-system';
    import {
      Heading as BraidHeading,
      Text as BraidText,
    } from 'braid-design-system';

    export default () => {
      return (
        <div>
          <Braid.Heading truncate>Some text</Braid.Heading>
          <Braid.Text truncate>Some text</Braid.Text>
          <Heading truncate>Some text</Heading>
          <Text truncate>Some text</Text>
        </div>
      );
    };`,
    output: dedent`
    import * as Braid from 'braid-design-system';
    import {
      Heading as BraidHeading,
      Text as BraidText,
    } from 'braid-design-system';

    export default () => {
      return (
        <div>
          <Braid.Heading maxLines={1}>Some text</Braid.Heading>
          <Braid.Text maxLines={1}>Some text</Braid.Text>
          <Heading truncate>Some text</Heading>
          <Text truncate>Some text</Text>
        </div>
      );
    };`,
  },
  {
    title: 'Don’t visit components from other packages',
    code: dedent`
    import { Heading, Text } from 'other-package';
    export default () => {
      return (
        <div>
          <Heading truncate>Some text</Heading>
          <Text truncate>Some text</Text>
        </div>
      );
    };`,
    output: dedent`
    import { Heading, Text } from 'other-package';
    export default () => {
      return (
        <div>
          <Heading truncate>Some text</Heading>
          <Text truncate>Some text</Text>
        </div>
      );
    };`,
  },
  {
    title:
      'Visit Braid component where non-deprecated props precede a deprecated prop in the prop list',
    code: dedent`
    import { Heading, Text } from 'braid-design-system';

    export default () => {
      return (
        <div>
          <Heading truncate>Some text</Heading>
          <Text truncate>Some text</Text>
        </div>
      );
    };`,
    output: dedent`
    import { Heading, Text } from 'braid-design-system';

    export default () => {
      return (
        <div>
          <Heading maxLines={1}>Some text</Heading>
          <Text maxLines={1}>Some text</Text>
        </div>
      );
    };`,
  },
];

pluginTester({
  pluginName: 'babel-plugin-braid-replace-truncate-prop',
  plugin,
  pluginOptions: { deprecations: v33 },
  babelOptions: {
    filename: 'test-file.tsx',
    plugins: [
      '@babel/plugin-syntax-jsx',
      ['@babel/plugin-syntax-typescript', { isTSX: true }],
    ],
    generatorOpts: {
      retainLines: true,
    },
  },
  tests,
});
