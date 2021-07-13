import React from 'react';
import dedent from 'dedent';
import {
  Heading,
  Text,
  TextLink,
  Divider,
  Strong,
  Card,
  Button,
  Stack,
  Columns,
  Column,
  Box,
} from '../../../../../lib/components';
import { TextStack } from '../../TextStack/TextStack';
import Code from '../../Code/Code';
import { Page } from '../../../types';
import { PageTitle } from '../../Seo/PageTitle';
import source from '../../../../../lib/utils/source.macro';
import { InlineCode } from '../../InlineCode/InlineCode';
import { VanillaMigrationBanner } from '../../../../../css/VanillaMigrationBanner';

const DevelopmentWorkflow = () => (
  <TextStack>
    <Heading component="h1" level="2">
      <PageTitle title="Development Workflow" />
      Development Workflow
    </Heading>
    <Text tone="secondary">
      This document aims to provide guidance for consumers on how best to build
      interfaces that properly leverage Braid.
    </Text>

    <Divider />

    <Heading level="3">Working with components</Heading>
    <Text>
      Braid provides consumers with a suite of components that are powered by an
      underlying themed styling system.
    </Text>
    <Text>
      The idealistic goal is that consumers should be able to build their
      experiences entirely from Braid components—using only the prop interfaces
      they expose. If done correctly, our products should be expressed
      exclusively using the design system’s language, which inherently means
      that they can be adapted to any theme that Braid supports.
    </Text>
    <Text>
      However, it’s expected that you’ll find gaps in the system, so Braid also
      provides lower level building blocks for generating custom components.
    </Text>

    <Heading level="3">High level components</Heading>
    <Text>
      Braid’s high level components are most likely the ones you would come to
      expect from a design system, e.g.{' '}
      <TextLink href="/components/Text">Text</TextLink>,{' '}
      <TextLink href="/components/Heading">Heading</TextLink>,{' '}
      <TextLink href="/components/Card">Card</TextLink>,{' '}
      <TextLink href="/components/Button">Button</TextLink>,{' '}
      <TextLink href="/components/TextField">TextField</TextLink>, etc.
    </Text>
    <Text>
      For these high level components, we have opted against supporting style
      overrides via <InlineCode>className</InlineCode> and{' '}
      <InlineCode>style</InlineCode> props. This ensures that gaps in the design
      system are surfaced rather than encouraging consumers to constantly apply
      workarounds.
    </Text>
    <Text>
      An example of composing a simple view leveraging some of these could be:
    </Text>
    <Code>
      {source(
        <Card>
          <Heading level="4">Title</Heading>
          <Text>My first Braid component</Text>
          <Button>Click me</Button>
        </Card>,
      )}
    </Code>
    <Text>
      You’ll notice that each of these components don’t provide any surrounding
      white space. This is where our layout components come in.
    </Text>

    <Heading level="3">Layout components</Heading>
    <Text>
      In order to distribute white space evenly between components, wrap sibling
      elements in a <TextLink href="/components/Stack">Stack</TextLink>{' '}
      component with a custom <InlineCode>space</InlineCode> property. For
      example, if you wanted
      <InlineCode>small</InlineCode> space between items in a{' '}
      <TextLink href="/components/Stack">Stack</TextLink>:
    </Text>
    <Code>
      {source(
        <Card>
          <Stack space="small">
            <Heading level="4">Title</Heading>
            <Text>My first Braid component</Text>
            <Button>Click me</Button>
          </Stack>
        </Card>,
      )}
    </Code>
    <Text>
      The <InlineCode>space</InlineCode> property is a responsive prop, which
      means that it can also accept different values for each breakpoint. For
      example, if you wanted <InlineCode>small</InlineCode> space on mobile and{' '}
      <InlineCode>medium</InlineCode> space on tablet and above:
    </Text>
    <Code>
      {source(
        <Card>
          <Stack space={{ mobile: 'small', tablet: 'medium' }}>
            <Heading level="4">Title</Heading>
            <Text>My first Braid component</Text>
            <Button>Click me</Button>
          </Stack>
        </Card>,
      )}
    </Code>
    <Text>
      For horizontal layouts,{' '}
      <TextLink href="/components/Columns">Columns</TextLink> provides various
      responsive rules for laying out content. For example, if you wanted to
      render a two-column layout that collapses to a single column on mobile:
    </Text>
    <Code>
      {source(
        <Columns space="gutter" collapseBelow="tablet">
          <Column>
            <Card>
              <Stack space="small">
                <Heading level="4">Column 1</Heading>
                <Text>My first Braid component</Text>
              </Stack>
            </Card>
          </Column>
          <Column>
            <Card>
              <Stack space="small">
                <Heading level="4">Column 2</Heading>
                <Text>My second Braid component</Text>
              </Stack>
            </Card>
          </Column>
        </Columns>,
      )}
    </Code>
    <Text>
      This <InlineCode>space</InlineCode> property is also responsive,
      supporting values that differ by breakpoint. For example, if you wanted{' '}
      <InlineCode>xxsmall</InlineCode> space on mobile and{' '}
      <InlineCode>gutter</InlineCode> space on tablet and above:
    </Text>
    <Code>
      {source(
        <Columns
          space={{ mobile: 'xxsmall', tablet: 'gutter' }}
          collapseBelow="tablet"
        >
          <Column>
            <Card>
              <Stack space="small">
                <Heading level="4">Column 1</Heading>
                <Text>My first Braid component</Text>
              </Stack>
            </Card>
          </Column>
          <Column>
            <Card>
              <Stack space="small">
                <Heading level="4">Column 2</Heading>
                <Text>My second Braid component</Text>
              </Stack>
            </Card>
          </Column>
        </Columns>,
      )}
    </Code>

    <Heading level="3">Need a custom component?</Heading>
    <Text>
      If you’re unable to satisfy a design using the built-in set of higher
      level components, Braid also provides consumers with the{' '}
      <TextLink href="/components/Box">Box</TextLink> component that provides
      direct access to the themed atomic styles that Braid uses internally,
      without the overhead of having to create and import a separate style
      sheet. A nice side-effect of this approach is that your application will
      be reusing existing CSS rules rather than generating new ones, keeping
      your bundle size to a minimum.
    </Text>
    <Text>
      The prop names for <TextLink href="/components/Box">Box</TextLink> mostly
      mimic standard CSS properties, while their values are more semantic,
      allowing the corresponding CSS rules to be computed across themes.
    </Text>
    <Code>
      {source(
        <Box background="brand" boxShadow="large" padding="large">
          <Text>My first Braid component</Text>
        </Box>,
      )}
    </Code>
    <Text>
      For more details, view the complete{' '}
      <TextLink href="/components/Box">Box documentation</TextLink>. For
      TypeScript users, you should also find that the Box API is available for
      autocompletion and type checking within your editor.
    </Text>

    <Heading level="3">Need responsive styles?</Heading>
    <Text>
      Previously, one of the main reasons for needing to create custom CSS was
      to define responsive rules. The{' '}
      <TextLink href="/components/Box">Box</TextLink> component makes this
      possible via <Strong>responsive properties,</Strong> which allows
      different values to specified for each defined breakpoint.
    </Text>
    <Text>
      For example, if we wanted to change the value for{' '}
      <InlineCode>display</InlineCode> responsively:
    </Text>
    <Code>
      {source(
        <Box display={{ mobile: 'flex', tablet: 'block' }}>
          <Heading level="2">Flex on small screen</Heading>
          <Heading level="2">Block on large screen</Heading>
        </Box>,
      )}
    </Code>
    <Text>
      For a list of low-level responsive props, check out the{' '}
      <TextLink href="/components/Box">Box documentation.</TextLink>
    </Text>

    <Heading level="3">Need semantic markup?</Heading>
    <Text>
      A key difference with Braid is that it doesn’t use a standard global CSS
      reset. Instead, element styles are reset at the component level via{' '}
      <TextLink href="/components/Box">Box</TextLink> and its{' '}
      <InlineCode>component</InlineCode> prop.
    </Text>
    <Text>
      For example, in order to render a semantic{' '}
      <InlineCode>fieldset</InlineCode> element without the native browser
      styles:
    </Text>
    <Code>
      {source(
        <Box component="fieldset">
          <legend>Reset Fieldset</legend>
        </Box>,
      )}
    </Code>

    <Heading level="3">Still need custom CSS?</Heading>
    <Text>
      Braid is built on top of{' '}
      <TextLink href="https://vanilla-extract.style/">vanilla-extract</TextLink>{' '}
      which satisfies our requirements for statically extracted CSS, leveraging
      CSS variables for theming. Custom styles on top of Braid can access the
      theme variables by importing them from Braid’s{' '}
      <InlineCode>css</InlineCode> export:
    </Text>
    <Code>{`import { vars } from 'braid-design-system/css';`}</Code>
    <Text weight="strong">
      Before writing custom styles, we highly recommend that you read the{' '}
      <TextLink href="https://vanilla-extract.style/documentation/">
        vanilla-extract documentation.
      </TextLink>
    </Text>
    <VanillaMigrationBanner />
    <Text>
      While higher level Braid components don’t support custom style overrides
      (e.g. <InlineCode>className</InlineCode> and{' '}
      <InlineCode>style</InlineCode>),{' '}
      <TextLink href="/components/Box">Box</TextLink> is the one exception.
      However, you should take care to ensure that custom classes on{' '}
      <TextLink href="/components/Box">Box</TextLink> only use styles that are
      not available via its prop interface.
    </Text>
    <Text>
      For example, if you wanted to render an element as{' '}
      <InlineCode>display: flex</InlineCode>, but with a custom, responsive{' '}
      <InlineCode>flex-basis</InlineCode> value:
    </Text>
    <Code>
      {dedent`
        // myComponent.css.ts
        import { style } from '@vanilla-extract/css';
        import { vars, responsiveStyle } from 'braid-design-system/css';

        export const root = style(
          responsiveStyle({
            mobile: { flexBasis: vars.space.small },
            tablet: { flexBasis: vars.space.medium },
            desktop: { flexBasis: vars.space.large },
            wide: { flexBasis: vars.space.xlarge },
          }),
        );
      `}
    </Code>
    <Text>
      Because vanilla-extract stylesheets are written in TypeScript (note the
      <InlineCode>.css.ts</InlineCode> extension), the{' '}
      <InlineCode>vars</InlineCode> object will be available for autocompletion
      and type checking within your editor.
    </Text>
    <Code>
      {dedent`
        // myComponent.ts
        import * as styles from './myComponent.css';

        export default function MyComponent() {
          return (
            <Box display="flex" className={styles.root}>
              <Text>My first Braid component</Text>
            </Box>
          );
        };
      `}
    </Code>

    <Divider />

    <Heading level="3">Have a question that wasn’t answered?</Heading>
    <Text>
      Reach out to us in{' '}
      <TextLink href="https://seekchat.slack.com/channels/braid-support">
        #braid-support
      </TextLink>
      .
    </Text>
  </TextStack>
);

const page: Page = {
  title: 'Development Workflow',
  component: DevelopmentWorkflow,
};

export default page;
