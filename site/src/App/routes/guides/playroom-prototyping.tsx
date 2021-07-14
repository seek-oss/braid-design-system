import React from 'react';
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
  BackgroundProvider,
} from '../../../../../lib/components';
import {
  Checkbox,
  Drawer,
  Placeholder,
  TextField,
} from '../../../../../lib/playroom/components';
import source from '../../../../../lib/utils/source.macro';
import { TextStack } from '../../TextStack/TextStack';
import { Page } from '../../../types';
import { PageTitle } from '../../Seo/PageTitle';
import Code from '../../Code/Code';
import { LinkableHeading } from '../../LinkableHeading/LinkableHeading';

interface MockJob {
  id: number;
  title: string;
  location: string;
  featured?: boolean;
}

const PlayroomPrototyping = () => (
  <TextStack>
    <Heading component="h1" level="2">
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

    <List>
      <Text>
        <TextLink href="#rendering-repetitive-content">
          Rendering repetitive content
        </TextLink>
      </Text>
      <Text>
        <TextLink href="#managing-state">Managing state</TextLink>
      </Text>
      <Text>
        <TextLink href="#navigating-between-screens">
          Navigating between screens
        </TextLink>
      </Text>
      <Text>
        <TextLink href="#custom-styling">Custom styling</TextLink>
      </Text>
    </List>

    <Divider />

    <LinkableHeading level="3">Rendering repetitive content</LinkableHeading>
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
      {({ setDefaultState, getState }) => {
        const result = source(
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
            ] as Array<MockJob>)}

            <Stack space="medium">
              {getState('jobs').map((job: MockJob) => (
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

        return {
          ...result,
          code: result.code
            .replace(/ as Array<MockJob>/g, '')
            .replace(/: MockJob/g, ''),
        };
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
      {({ setDefaultState, getState }) => {
        const result = source(
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
            ] as Array<MockJob>)}

            <Stack space="medium">
              {getState('jobs').map((job: MockJob) => (
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

        return {
          ...result,
          code: result.code
            .replace(/ as Array<MockJob>/g, '')
            .replace(/: MockJob/g, ''),
        };
      }}
    </Code>

    <LinkableHeading level="3">Managing state</LinkableHeading>
    <Text>
      Braid components, when used in Playroom, manage their own state internally
      by default. For example, if you use a{' '}
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
      something. While this is usually fine in simple prototypes, you’re likely
      to find scenarios where you need the state to have a default value. For
      example, we might want our checkbox to be checked by default. To support
      this, our Playrooom provides a <Strong>setDefaultState</Strong> function
      which should be called before rendering anything to the screen:
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
          <Card>
            <Stack space="large">
              <TextField label="First name" stateName="firstName" />
              <TextField label="Last name" stateName="lastName" />

              {getState('firstName') && getState('lastName') ? (
                <Heading level="4">
                  👋 Hello {getState('firstName')} {getState('lastName')}!
                </Heading>
              ) : null}
            </Stack>
          </Card>,
        )
      }
    </Code>
    <Text>
      It’s not just about form elements either. For example, we might want to
      provide a <TextLink href="/components/Button">Button</TextLink> that, via
      an <Strong>onClick</Strong> handler, toggles the <Strong>open</Strong>{' '}
      state of a <TextLink href="/components/Drawer">Drawer</TextLink>.
    </Text>
    <Text>
      In this example we’re making use of the <Strong>toggleState</Strong>{' '}
      function to set the state to <Strong>true</Strong> if the drawer is
      hidden.
    </Text>

    <Code>
      {({ toggleState }) =>
        source(
          <Card>
            <Actions>
              <Button onClick={() => toggleState('myDrawer')}>
                Open drawer
              </Button>
            </Actions>

            <Drawer title="Drawer" stateName="myDrawer">
              <Placeholder height={100} />
            </Drawer>
          </Card>,
        )
      }
    </Code>

    <LinkableHeading level="3">Navigating between screens</LinkableHeading>
    <Text>
      We can also leverage state to simulate having multiple screens by using a
      piece of state called <Strong>screen</Strong>.
    </Text>
    <Text>
      In this example we’re making use of the <Strong>setState</Strong> function
      to choose the desired screen, and the <Strong>resetState</Strong> function
      to go back to the original screen.
    </Text>

    <Code>
      {({ setDefaultState, getState, setState, resetState }) =>
        source(
          <>
            {setDefaultState('screen', 'Home')}

            {getState('screen') === 'Home' && (
              <Card>
                <Stack space="large">
                  <Heading level="3">Home</Heading>
                  <Actions>
                    <Button onClick={() => setState('screen', 'Welcome')}>
                      Sign in
                    </Button>
                  </Actions>
                </Stack>
              </Card>
            )}

            {getState('screen') === 'Welcome' && (
              <Card>
                <Stack space="large">
                  <Heading level="3">👋 Welcome!</Heading>
                  <Placeholder height={100} />
                  <Actions>
                    <Button onClick={() => resetState('screen')}>
                      Sign out
                    </Button>
                  </Actions>
                </Stack>
              </Card>
            )}
          </>,
        )
      }
    </Code>

    <LinkableHeading level="3">Custom styling</LinkableHeading>
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
        Since we’re applying a custom background style, we need to use the{' '}
        <TextLink href="/components/BackgroundProvider">
          BackgroundProvider
        </TextLink>{' '}
        component so that nested elements know to invert their colours.
      </Text>
    </Notice>
    <Code>
      {({ responsiveValue, vars }) =>
        source(
          <>
            <Box
              padding="large"
              borderRadius="standard"
              style={{
                background: responsiveValue({
                  mobile: vars.backgroundColor.brand,
                  tablet: vars.backgroundColor.card,
                }),
              }}
            >
              <BackgroundProvider
                type={responsiveValue({
                  mobile: 'dark',
                  tablet: 'light',
                })}
              >
                <Text>Responsive background</Text>
              </BackgroundProvider>
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
  component: PlayroomPrototyping,
};

export default page;
