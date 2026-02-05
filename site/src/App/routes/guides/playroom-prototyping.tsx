import { LinkableHeading } from '@braid-design-system/docs-ui';
import source from '@braid-design-system/source.macro';
import {
  Heading,
  Divider,
  List,
  Text,
  TextLink,
  Strong,
  Alert,
  Notice,
  Stack,
  Button,
  Actions,
  Card,
  Badge,
  Box,
  Columns,
  Column,
} from 'braid-src/lib/components';
import {
  Checkbox,
  Drawer,
  Inline,
  Placeholder,
  PlaceholderFooter,
  PlaceholderHeader,
  TextField,
} from 'braid-src/lib/playroom/components';

import type { Page } from '../../../types';
import Code from '../../Code/Code';
import { PageTitle } from '../../Seo/PageTitle';
import { TextStack } from '../../TextStack/TextStack';
import { ThemedExample } from '../../ThemeSetting';

interface MockJob {
  id: number;
  title: string;
  location: string;
  featured?: boolean;
}

const PlayroomPrototyping = () => (
  <TextStack>
    <Heading level="1">
      <PageTitle title="Playroom Prototyping" />
      Playroom Prototyping
    </Heading>
    <Text tone="secondary">
      This guide aims to teach you how to make better use of Playroom for
      real-world prototyping, and assumes you already have a basic level of
      familiarity with Playroom.
    </Text>
    <Text tone="secondary">
      If you’re not a developer, don’t feel like you need to understand all of
      the syntax on this page. When you’re getting started, it’s perfectly
      normal to copy-and-paste code snippets without fully grasping how they
      work.
    </Text>

    <Divider />

    <List space="medium">
      <Text>
        <TextLink href="#rendering-repetitive-content">
          Rendering repetitive content
        </TextLink>
      </Text>

      <Stack space="small">
        <Text>
          <TextLink href="#state-management">State Management</TextLink>
        </Text>
        <List>
          <Text>
            <TextLink href="#using-field-state">Using field state</TextLink>
          </Text>
          <Text>
            <TextLink href="#navigating-between-screens">
              Navigating between screens
            </TextLink>
          </Text>
        </List>
      </Stack>

      <Stack space="small">
        <Text>
          <TextLink href="#playroom-only-components">
            Playroom-only components
          </TextLink>
        </Text>
        <List>
          <Text>
            <TextLink href="#placeholder">Placeholder</TextLink>
          </Text>
          <Text>
            <TextLink href="#placeholderheader">PlaceholderHeader</TextLink>
          </Text>
          <Text>
            <TextLink href="#placeholderfooter">PlaceholderFooter</TextLink>
          </Text>
        </List>
      </Stack>
      <Text>
        <TextLink href="#custom-styling">Custom styling</TextLink>
      </Text>
    </List>

    <Divider />

    <LinkableHeading component="h2" level="3">
      Rendering repetitive content
    </LinkableHeading>
    <Text>
      Most designs contain some degree of repeating content. For example, let’s
      say we have a list of basic cards:
    </Text>
    <Code>
      <Stack space="medium">
        <Card>
          <Stack space="small">
            <Text weight="strong">Lead Designer</Text>
            <Text>Melbourne</Text>
          </Stack>
        </Card>
        <Card>
          <Stack space="small">
            <Text weight="strong">Senior Developer</Text>
            <Text>Sydney</Text>
          </Stack>
        </Card>
        <Card>
          <Stack space="small">
            <Text weight="strong">Product Manager</Text>
            <Text>Canberra</Text>
          </Stack>
        </Card>
      </Stack>
    </Code>

    <Text>
      Notice that these cards are manually written (or more realistically,
      copied-and-pasted) several times. This isn’t ideal when we want to iterate
      on our design since we have to update each card by hand. If we had a lot
      of cards on screen, changing our design would get tiring pretty quickly.
    </Text>
    <Text>
      Instead, to make our prototype faster to iterate on, we can{' '}
      <TextLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">
        map over an array of data,
      </TextLink>{' '}
      only having to define the UI in a single place. You can think of it like a{' '}
      <TextLink href="https://www.sketch.com/docs/designing/symbols">
        Sketch symbol,
      </TextLink>{' '}
      only much more powerful.
    </Text>
    <Notice tone="info">
      <Text>
        To keep the code clean, we’ll store our job data in a piece of state
        called <Strong>&ldquo;jobs&rdquo;</Strong>. We’ll cover the concept of
        state in more detail later.
      </Text>
    </Notice>
    <Code>
      {({ setDefaultState, getState: getStateUntyped }) => {
        // We shadow the `getState` function to provide a return type.
        // We do this to avoid having to remove types from the code snippet.
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

            <Stack space="small">
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
    </Code>
    <Text>
      We now have the same design as before, but expressed in a way that makes
      it much easier for us to change. Any updates we make to this card will now
      affect every card on the screen. It’s also much faster for us to make
      changes to the data without having to touch the UI.
    </Text>
    <Text>
      Your data can also contain optional fields. For example, we may want to
      provide an optional <Strong>featured</Strong> property that toggles the
      card tone and the visibility of a badge.
    </Text>
    <Notice tone="info">
      <Text>
        To dynamically alter the UI in this example, we’ll use the{' '}
        <TextLink href="https://www.javascripttutorial.net/javascript-ternary-operator/">
          ternary operator
        </TextLink>{' '}
        and the{' '}
        <TextLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">
          logical AND operator.
        </TextLink>
      </Text>
    </Notice>
    <Code>
      {({ setDefaultState, getState: getStateUntyped }) => {
        // We shadow the `getState` function to provide a return type.
        // We do this to avoid having to remove types from the code snippet.
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
                featured: true,
                title: 'Senior Developer',
                location: 'Sydney',
              },
              {
                id: 3,
                title: 'Product Manager',
                location: 'Canberra',
              },
            ])}

            <Stack space="small">
              {getState('jobs').map((job) => (
                <Card key={job.id} tone={job.featured ? 'promote' : undefined}>
                  <Stack space="small">
                    {job.featured && (
                      <Badge weight="strong" tone="promote">
                        Featured
                      </Badge>
                    )}
                    <Text weight="strong">{job.title}</Text>
                    <Text>{job.location}</Text>
                  </Stack>
                </Card>
              ))}
            </Stack>
          </>,
        );
      }}
    </Code>

    <LinkableHeading component="h2" level="3">
      State management
    </LinkableHeading>

    <Stack space="large">
      <LinkableHeading level="3">Using field state</LinkableHeading>
      <Text>
        Braid components, when used in Playroom, manage their own state
        internally by default. For example, if you use a{' '}
        <TextLink href="/components/Checkbox">Checkbox</TextLink> component,
        you’re able to toggle the checkbox on and off.
      </Text>
      <Code>
        <Checkbox label="Checkbox" />
      </Code>
      <Text>
        This checkbox works in isolation, but what if we wanted it to control
        other parts of the UI? Well, first we need to provide a{' '}
        <Strong>stateName</Strong> prop to our checkbox, which then allows us to
        ask for its state elsewhere in our prototype using the{' '}
        <Strong>getState</Strong> function.
      </Text>
      <Text>
        As a minimal example, let’s make the checkbox toggle the visibility of
        another element:
      </Text>
      <Code>
        {({ getState }) =>
          source(
            <Stack space="medium">
              <Checkbox label="Checkbox" stateName="myCheckbox" />

              {getState('myCheckbox') && (
                <Notice tone="positive">
                  <Text>Good job! You checked the checkbox!</Text>
                </Notice>
              )}
            </Stack>,
          )
        }
      </Code>
      <Text>
        We could also use the checkbox state to toggle the visibility of two
        alternate elements:
      </Text>
      <Code>
        {({ getState }) =>
          source(
            <Stack space="medium">
              <Checkbox label="Checkbox" stateName="myCheckbox" />

              {getState('myCheckbox') ? (
                <Notice tone="positive">
                  <Text>Good job! You checked the checkbox!</Text>
                </Notice>
              ) : (
                <Notice tone="critical">
                  <Text>Oops! You haven’t checked the checkbox!</Text>
                </Notice>
              )}
            </Stack>,
          )
        }
      </Code>

      <Text>
        By default, all state values are blank until the user interacts with
        something. While this is usually fine in simple prototypes, you’re
        likely to find scenarios where you need the state to have a default
        value. For example, we might want our checkbox to be checked by default.
        To support this, our Playrooom provides a{' '}
        <Strong>setDefaultState</Strong> function which should be called before
        rendering anything to the screen:
      </Text>
      <Code>
        {({ setDefaultState, getState }) =>
          source(
            <>
              {setDefaultState('myCheckbox', true)}

              <Stack space="medium">
                <Checkbox label="Checkbox" stateName="myCheckbox" />

                {getState('myCheckbox') ? (
                  <Notice tone="positive">
                    <Text>Good job! You checked the checkbox!</Text>
                  </Notice>
                ) : (
                  <Notice tone="critical">
                    <Text>Oops! You haven’t checked the checkbox!</Text>
                  </Notice>
                )}
              </Stack>
            </>,
          )
        }
      </Code>
      <Text>
        We can bind to more complicated state too, like text values within{' '}
        <TextLink href="/components/TextField">TextField</TextLink> components:
      </Text>
      <Code>
        {({ getState }) =>
          source(
            <Stack space="large">
              <TextField label="First name" stateName="firstName" />
              <TextField label="Last name" stateName="lastName" />

              {getState('firstName') && getState('lastName') ? (
                <Heading level="4">
                  👋 Hello {getState('firstName')} {getState('lastName')}!
                </Heading>
              ) : null}
            </Stack>,
          )
        }
      </Code>
      <Text>
        It’s not just about form elements either. For example, we might want to
        provide a <TextLink href="/components/Button">Button</TextLink> that,
        via an <Strong>onClick</Strong> handler, toggles the{' '}
        <Strong>open</Strong> state of a{' '}
        <TextLink href="/components/Drawer">Drawer</TextLink>.
      </Text>
      <Text>
        In this example we’re making use of the <Strong>toggleState</Strong>{' '}
        function to set the state to <Strong>true</Strong> if the drawer is
        hidden.
      </Text>

      <Code>
        {({ toggleState }) =>
          source(
            <>
              <Actions>
                <Button onClick={() => toggleState('myDrawer')}>
                  Open drawer
                </Button>
              </Actions>

              <Drawer title="Drawer" stateName="myDrawer">
                <Placeholder height={100} />
              </Drawer>
            </>,
          )
        }
      </Code>
    </Stack>

    <Stack space="large">
      <LinkableHeading level="3">Navigating between screens</LinkableHeading>
      <Text>
        We can also leverage state to simulate having multiple screens by using
        a piece of state called <Strong>screen</Strong>.
      </Text>
      <Text>
        In this example we’re making use of the <Strong>setState</Strong>{' '}
        function to choose the desired screen, and the{' '}
        <Strong>resetState</Strong> function to go back to the original screen.
      </Text>

      <Code>
        {({ setDefaultState, getState, setState, resetState }) =>
          source(
            <>
              {setDefaultState('screen', 'Home')}

              {getState('screen') === 'Home' && (
                <Stack space="large">
                  <Heading level="2">Home</Heading>
                  <Actions>
                    <Button onClick={() => setState('screen', 'Welcome')}>
                      Sign in
                    </Button>
                  </Actions>
                </Stack>
              )}

              {getState('screen') === 'Welcome' && (
                <Stack space="large">
                  <Heading level="2">👋 Welcome!</Heading>
                  <Placeholder height={100} />
                  <Actions>
                    <Button onClick={() => resetState('screen')}>
                      Sign out
                    </Button>
                  </Actions>
                </Stack>
              )}
            </>,
          )
        }
      </Code>
    </Stack>

    <LinkableHeading component="h2" level="3">
      Playroom-only components
    </LinkableHeading>

    <Text>
      To better facilitate prototyping, Braid provides a few extra components
      that are only available within Playroom. These components are designed to
      help you quickly build either wireframes or more realistic prototypes
      without needing to create them from scratch.
    </Text>

    <Stack space="large">
      <Stack space="medium">
        <LinkableHeading level="3">Placeholder</LinkableHeading>
        <Text>
          For wireframing or scaffolding page layout around a prototype.
        </Text>
      </Stack>

      <Stack space="medium">
        <LinkableHeading level="4">Size</LinkableHeading>

        <Text>
          Use <Strong>height</Strong> and <Strong>width</Strong> props to
          control the size. Any numerical value will be treated as pixels, while
          strings can use any valid CSS unit, i.e. “auto” or “100%”. The default
          height is 120px, and width is “auto”.
        </Text>

        <Code collapsedByDefault>
          <Columns space="medium">
            <Column width="1/2">
              <Placeholder height={80} />
            </Column>
            <Column width="content">
              <Placeholder height="100%" width={60} />
            </Column>
            <Column>
              <Placeholder height={150} />
            </Column>
          </Columns>
        </Code>
      </Stack>

      <Stack space="medium">
        <LinkableHeading level="4">Label</LinkableHeading>

        <Text>
          Use <Strong>label</Strong> to provide a descriptive text for the
          placeholder.
        </Text>

        <Code collapsedByDefault>
          <Columns space="medium">
            <Column width="content">
              <Placeholder height={80} width={150} label="Sidebar" />
            </Column>
            <Column>
              <Placeholder height={80} width="100%" label="Content" />
            </Column>
          </Columns>
        </Code>
      </Stack>

      <Stack space="medium">
        <LinkableHeading level="4">Shape</LinkableHeading>

        <Text>
          Use <Strong>shape</Strong> choose between a <Strong>rectangle</Strong>{' '}
          (default) or <Strong>round</Strong>.
        </Text>

        <Code collapsedByDefault>
          <Inline space="medium">
            <Placeholder height={80} width={80} shape="rectangle" />
            <Placeholder height={80} width={80} shape="round" />
          </Inline>
        </Code>
      </Stack>

      <Stack space="medium">
        <LinkableHeading level="4">Images</LinkableHeading>

        <Text>
          Use <Strong>image</Strong> to apply a background image that fills the
          placeholder. The <Strong>imageSize</Strong> prop controls how the
          image is sized and accepts any valid CSS{' '}
          <TextLink
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-size"
            target="_blank"
          >
            background-size
          </TextLink>{' '}
          value, defaulting to{' '}
          <TextLink
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-size#cover"
            target="_blank"
          >
            “cover”
          </TextLink>
          .
        </Text>

        <Code collapsedByDefault>
          <Placeholder
            height={200}
            image="https://lists.office.com/Images/62140e26-37b7-42d2-8dfb-a4d7cf1bc427/6632ae14-287a-4766-869f-a4b0c2a287e6/T29KISYT8UJTUNYSO9P2YRXCCF/76926616-dcbe-4e3d-a0d3-6ab3641d8d86"
          />
        </Code>
      </Stack>
    </Stack>

    <Stack space="large">
      <Stack space="medium">
        <LinkableHeading level="3">PlaceholderHeader</LinkableHeading>
        <Text>
          For placeholder for framing SEEK-based experiences in prototypes.
        </Text>
      </Stack>

      <Stack space="medium">
        <LinkableHeading level="4">brand</LinkableHeading>

        <Text>
          Sets the logo for the selected brand. By default uses{' '}
          <Strong>seek</Strong>, with options for <Strong>jobsdb</Strong> and{' '}
          <Strong>jobstreet</Strong>.
        </Text>

        <Code collapsedByDefault>
          <Stack space="small">
            <PlaceholderHeader brand="seek" />
            <PlaceholderHeader brand="jobsdb" />
            <PlaceholderHeader brand="jobstreet" />
          </Stack>
        </Code>
      </Stack>

      <Stack space="medium">
        <LinkableHeading level="4">authenticated</LinkableHeading>

        <Text>
          By default, presents a basic logged in user account menu. To prototype
          a logged out experience, set the <Strong>authenticated</Strong> prop
          to <Strong>false</Strong> .
        </Text>

        <Code collapsedByDefault>
          <PlaceholderHeader authenticated={false} />
        </Code>
      </Stack>

      <Stack space="medium">
        <LinkableHeading level="4">product</LinkableHeading>

        <Text>Sets the product scope to be used alongside the logo.</Text>

        <Code collapsedByDefault>
          <PlaceholderHeader product="product" />
        </Code>
      </Stack>

      <Stack space="medium">
        <LinkableHeading level="4">divider</LinkableHeading>

        <Text>
          By default, the header uses a bottom divider, which can be disabled by
          setting the <Strong>divider</Strong> prop to <Strong>false</Strong>.
        </Text>

        <Code collapsedByDefault>
          <PlaceholderHeader divider={false} />
        </Code>
      </Stack>
    </Stack>

    <Stack space="large">
      <Stack space="medium">
        <LinkableHeading level="3">PlaceholderFooter</LinkableHeading>
        <Text>
          For placeholder for framing SEEK-based experiences in prototypes.
        </Text>
      </Stack>

      <Notice>
        <Text>
          Recommended to use in conjunction with the <Strong>footer</Strong>{' '}
          prop on the <TextLink href="/components/Page">Page</TextLink>{' '}
          component.
        </Text>
      </Notice>

      <ThemedExample>
        <PlaceholderFooter />
      </ThemedExample>

      <Stack space="medium">
        <LinkableHeading level="4">divider</LinkableHeading>

        <Text>
          By default, the footer uses a top divider, which can be disabled by
          setting the <Strong>divider</Strong> prop to <Strong>false</Strong>.
        </Text>

        <Code collapsedByDefault>
          <PlaceholderFooter divider={false} />
        </Code>
      </Stack>
    </Stack>

    <LinkableHeading component="h2" level="3">
      Custom styling
    </LinkableHeading>
    <Alert tone="caution">
      <Text>
        This section covers very low-level mechanisms that require familiarity
        with CSS. These techniques should only be used as a last resort when
        standard components are insufficient.
      </Text>
    </Alert>
    <Text>
      For custom design elements, you can use the{' '}
      <TextLink href="/components/Box">Box</TextLink> component. In addition to
      its usual set of styling properties, it can also be further customised via
      the <Strong>style</Strong> prop which accepts an object of style rules.
    </Text>
    <Text>
      Within these styles you also have access to the{' '}
      <TextLink href="/css/vars">vars</TextLink> and{' '}
      <TextLink href="/components/useResponsiveValue">responsiveValue</TextLink>{' '}
      APIs which allow you to make your custom styles themed and responsive. For
      example, if we wanted to responsively change the colour of an element:
    </Text>
    <Notice tone="info">
      <Text>
        Since we’re applying a custom background style, we need to set the{' '}
        <Strong>background</Strong> prop on the component to be either{' '}
        <Strong>customDark</Strong> or <Strong>customLight</Strong>, so that
        nested elements know when it is necessary to invert their colours.
      </Text>
    </Notice>
    <Code>
      {({ responsiveValue, vars }) =>
        source(
          <>
            <Box
              padding="large"
              borderRadius="standard"
              background={responsiveValue({
                mobile: 'customDark',
                tablet: 'customLight',
              })}
              style={{
                background: responsiveValue({
                  mobile: vars.backgroundColor.brand,
                  tablet: vars.backgroundColor.surface,
                }),
              }}
            >
              <Text>Responsive background</Text>
            </Box>
          </>,
        )
      }
    </Code>

    <Heading level="3">What’s next?</Heading>
    <Text>
      If you’ve come this far, it’s likely that you’ll still have some
      questions. Please reach out so we can give you a hand, and hopefully feed
      improvements back to the site. We’re going to keep iterating on the
      prototyping experience over time, so any feedback you have would be
      greatly appreciated!
    </Text>
  </TextStack>
);

const page: Page = {
  title: 'Playroom Prototyping',
  element: <PlayroomPrototyping />,
};

export default page;
