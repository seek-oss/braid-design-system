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
} from '../../../../lib/components';
import { TextStack } from '../TextStack/TextStack';
import { Link } from '../Documentation/Link';
import Code from '../Code/Code';
import { Page } from '../../types';

const page: Page = {
  title: 'Development Workflow',
  Component: () => {
    return (
      <TextStack>
        <Heading level="2">Development Workflow</Heading>
        <Text tone="secondary">
          This document aims to provide guidance for consumers on how best to
          build interfaces that properly leverage Braid.
        </Text>

        <Divider />

        <Heading level="3">Working with components</Heading>
        <Text>
          Braid provides consumers with a suite of components that are powered
          by an underlying themed styling system.
        </Text>
        <Text>
          The idealistic goal is that consumers should be able to build their
          experiences entirely from Braid components—using only the prop
          interfaces they expose. If done correctly, our products should be
          expressed exclusively using the design system’s language, which
          inherently means that they can be adapted to any theme that Braid
          supports.
        </Text>
        <Text>
          However, it’s expected that you’ll find gaps in the system, so Braid
          also provides lower level building blocks for generating custom
          components.
        </Text>

        <Heading level="3">High level components</Heading>
        <Text>
          Braid’s high level components are most likely the ones you would come
          to expect from a design system, e.g.{' '}
          <Link to="/components/Text">Text</Link>,{' '}
          <Link to="/components/Heading">Heading</Link>,{' '}
          <Link to="/components/Card">Card</Link>,{' '}
          <Link to="/components/Button">Button</Link>,{' '}
          <Link to="/components/TextField">TextField</Link>, etc.
        </Text>
        <Text>
          For these high level components, we have opted against supporting
          style overrides via ‘className’ and ‘style’ props. This ensures that
          gaps in the design system are surfaced rather than encouraging
          consumers to constantly apply workarounds.
        </Text>
        <Text>
          An example of composing a simple view leveraging some of these could
          be:
        </Text>
        <Code>
          <Card>
            <Heading level="4">Title</Heading>
            <Text>My first Braid component</Text>
            <Button>Click me</Button>
          </Card>
        </Code>
        <Text>
          You’ll notice that each of these components don’t provide any
          surrounding white space. This is where our layout components come in.
        </Text>

        <Heading level="3">Layout components</Heading>
        <Text>
          In order to distribute white space evenly between components, wrap
          sibling elements in a <Link to="/components/Stack">Stack</Link>{' '}
          component with a custom ‘space’ property. For example, if you wanted
          ‘small’ space between items in a{' '}
          <Link to="/components/Stack">Stack</Link>:
        </Text>
        <Code>
          <Card>
            <Stack space="small">
              <Heading level="4">Title</Heading>
              <Text>My first Braid component</Text>
              <Button>Click me</Button>
            </Stack>
          </Card>
        </Code>
        <Text>
          The ‘space’ property is a responsive prop, which means that it can
          also accept an array of values representing each breakpoint. For
          example, if you wanted ‘small’ space on mobile and ‘medium’ space on
          desktop:
        </Text>
        <Code>
          <Card>
            <Stack space={['small', 'medium']}>
              <Heading level="4">Title</Heading>
              <Text>My first Braid component</Text>
              <Button>Click me</Button>
            </Stack>
          </Card>
        </Code>
        <Text>
          For horizontal layouts, <Link to="/components/Columns">Columns</Link>{' '}
          provides various responsive rules for laying out content. For example,
          if you wanted to render a two-column layout that collapses to a single
          column on mobile:
        </Text>
        <Code>
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
          </Columns>
        </Code>
        <Text>
          This ‘space’ property is also responsive, supporting an array of
          values for each breakpoint. For example, if you wanted ‘xxsmall’ space
          on mobile and ‘gutter’ space on desktop:
        </Text>
        <Code>
          <Columns space={['xxsmall', 'gutter']} collapseBelow="tablet">
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
          </Columns>
        </Code>

        <Heading level="3">Need a custom component?</Heading>
        <Text>
          If you’re unable to satisfy a design using the built-in set of higher
          level components, Braid also provides consumers with the{' '}
          <Link to="/components/Box">Box</Link> component that provides direct
          access to the themed atomic styles that Braid uses internally, without
          the overhead of having to create and import a separate style sheet. A
          nice side-effect of this approach is that your application will be
          reusing existing CSS rules rather than generating new ones, keeping
          your bundle size to a minimum.
        </Text>
        <Text>
          The prop names for <Link to="/components/Box">Box</Link> mostly mimic
          standard CSS properties, while their values are more semantic,
          allowing the corresponding CSS rules to be computed across themes.
        </Text>
        <Code>
          <Box background="brand" boxShadow="large" padding="large">
            <Text>My first Braid component</Text>
          </Box>
        </Code>
        <Text>
          For more details, view the complete{' '}
          <Link to="/components/Box">Box documentation</Link>. For TypeScript
          users, you should also find that the Box API is available for
          autocompletion and type checking within your editor.
        </Text>

        <Heading level="3">Need responsive styles?</Heading>
        <Text>
          Previously, one of the main reasons for needing to create custom CSS
          was to define responsive rules. The{' '}
          <Link to="/components/Box">Box</Link> component makes this possible
          via <Strong>responsive properties,</Strong> which are provided as an
          array of values—one per defined breakpoint, where the first item is
          the mobile value, followed by the desktop value.
        </Text>
        <Text>
          For example, if we wanted to change the value for ‘display’
          responsively:
        </Text>
        <Code>
          <Box display={['flex', 'block']}>
            <Heading level="2">Flex on small screen</Heading>
            <Heading level="2">Block on large screen</Heading>
          </Box>
        </Code>
        <Text>
          For a list of low-level responsive props, check out the{' '}
          <Link to="/components/Box">Box documentation.</Link>
        </Text>

        <Heading level="3">Need semantic markup?</Heading>
        <Text>
          A key difference with Braid is that it doesn’t use a standard global
          CSS reset. Instead, element styles are reset at the component level
          via <Link to="/components/Box">Box</Link> and its ‘component’ prop.
        </Text>
        <Text>
          For example, in order to render a semantic ‘fieldset’ element without
          the native browser styles:
        </Text>
        <Code>
          <Box component="fieldset">
            <legend>Reset Fieldset</legend>
          </Box>
        </Code>

        <Heading level="3">Still need custom CSS?</Heading>
        <Text>
          Braid is built on top of{' '}
          <TextLink href="https://seek-oss.github.io/treat">treat</TextLink>{' '}
          (imported via ‘sku/treat’ which satisfies our requirements for
          themeable, statically extracted CSS. Custom styles on top of Braid
          should use treat in order to gain access to the underlying theme
          variables.
        </Text>
        <Text weight="strong">
          Before writing a treat file, we highly recommend that you read the{' '}
          <TextLink href="https://seek-oss.github.io/treat">
            treat documentation.
          </TextLink>
        </Text>
        <Text>
          While higher level Braid components don’t support custom style
          overrides (e.g. ‘className’ and ‘style’),{' '}
          <Link to="/components/Box">Box</Link> is the one exception. However,
          you should take care to ensure that custom classes on{' '}
          <Link to="/components/Box">Box</Link> only use styles that are not
          available via its prop interface.
        </Text>
        <Text>
          For example, if you wanted to render an element as ‘display: flex’,
          but with a custom, responsive ‘flex-basis’ value:
        </Text>
        <Code>{dedent`
          // myComponent.treat.ts
          import { style } from 'sku/treat';

          export const root = style(theme =>
            theme.utils.responsiveStyle({
              mobile: { flexBasis: theme.grid * 3 },
              tablet: { flexBasis: theme.grid * 5 },
              desktop: { flexBasis: theme.grid * 8 },
            }),
          );
        `}</Code>
        <Text>
          Because treat files are written in TypeScript, the ‘theme’ object will
          be available for autocompletion and type checking within your editor.
        </Text>
        <Code>{dedent`
          // myComponent.ts
          import { useStyles } from 'sku/react-treat';
          import * as styleRefs from './myComponent.treat.ts';

          export default () => {
            const styles = useStyles(styleRefs);

            return (
              <Box display="flex" className={styles.root}>
                <Text>My first Braid component</Text>
              </Box>
            );
          };
        `}</Code>

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
  },
};

export default page;
