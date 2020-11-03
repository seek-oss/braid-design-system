import React from 'react';
import {
  Heading,
  Divider,
  Text,
  TextLink,
  Strong,
  Notice,
  Stack,
  Button,
  Actions,
  Box,
  Card,
} from '../../../../../lib/components';
import {
  Checkbox,
  Drawer,
  Placeholder,
  TextField,
} from '../../../../../lib/playroom/components';
import { TextStack } from '../../TextStack/TextStack';
import { Page } from '../../../types';
import { PageTitle } from '../../Seo/PageTitle';
import Code from '../../Code/Code';

const PlayroomPrototyping = () => (
  <TextStack>
    <Heading component="h1" level="2">
      <PageTitle title="Playroom Prototyping" />
      Playroom Prototyping
    </Heading>
    <Text tone="secondary">
      This guide aims to teach you how to make your Playroom designs
      interactive, and assumes you already have a basic level of familiarity
      with Playroom.
    </Text>

    <Divider />

    <Heading level="3">Introducing state</Heading>
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
      So the checkbox works in isolation, but what if we wanted it to control
      other parts of the UI? Well, first we need to provide a{' '}
      <Strong>name</Strong> to our checkbox, which then allows us to ask for its
      state elsewhere in our prototype using the <Strong>getState</Strong>{' '}
      function:
    </Text>
    <Code
      displayCode={`
        <Stack space="medium">
          <Checkbox
            name="myCheckbox"
            label="Checkbox"
          />

          {getState('myCheckbox') && (
            <Notice tone="positive">
              <Text>Good job! You checked the checkbox!</Text>
            </Notice>
          )}
        </Stack>
      `}
    >
      {({ getState }) => (
        <Stack space="medium">
          <Checkbox label="Checkbox" name="myCheckbox" />

          {getState('myCheckbox') && (
            <Notice tone="positive">
              <Text>Good job! You checked the checkbox!</Text>
            </Notice>
          )}
        </Stack>
      )}
    </Code>
    <Text>
      We could also use the checkbox state to toggle the visibility of two
      alternate elements:
    </Text>
    <Code
      displayCode={`
        <Stack space="medium">
          <Checkbox label="Checkbox" name="myCheckbox" />

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
      `}
    >
      {({ getState }) => (
        <Stack space="medium">
          <Checkbox label="Checkbox" name="myCheckbox" />

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
      )}
    </Code>
    <Text>
      We can bind to more complicated state too, like text values within{' '}
      <TextLink href="/components/TextField">TextField</TextLink> components:
    </Text>
    <Code
      displayCode={`
        <Card>
          <Stack space="large">
            <TextField label="First name" name="firstName" />
            <TextField label="Last name" name="lastName" />

            {getState('firstName') && getState('lastName') ? (
              <Heading level="4">
                👋 Hello {getState('firstName')} {getState('lastName')}!
              </Heading>
            ) : null}
          </Stack>
        </Card>
      `}
    >
      {({ getState }) => (
        <Card>
          <Stack space="large">
            <TextField label="First name" name="firstName" />
            <TextField label="Last name" name="lastName" />

            {getState('firstName') && getState('lastName') ? (
              <Heading level="4">
                👋 Hello {getState('firstName')} {getState('lastName')}!
              </Heading>
            ) : null}
          </Stack>
        </Card>
      )}
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

    <Code
      displayCode={`
        <Card>
          <Actions>
            <Button onClick={() => toggleState('myDrawer')}>Open drawer</Button>
          </Actions>

          <Drawer title="Drawer" name="myDrawer">
            <Placeholder height={100} />
          </Drawer>
        </Card>
      `}
    >
      {({ toggleState }) => (
        <Card>
          <Actions>
            <Button onClick={() => toggleState('myDrawer')}>Open drawer</Button>
          </Actions>

          <Drawer title="Drawer" name="myDrawer">
            <Placeholder height={100} />
          </Drawer>
        </Card>
      )}
    </Code>

    <Heading level="3">Navigating between screens</Heading>
    <Text>
      We can also leverage state to simulate having multiple screens by using a
      piece of state called <Strong>screen</Strong>.
    </Text>
    <Text>
      In this example we’re making use of the <Strong>setState</Strong> function
      to choose the desired screen, and the <Strong>resetState</Strong> function
      to go back to the original screen.
    </Text>

    <Code
      displayCode={`
        <Box>
          {!getState('screen') && (
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
                  <Button onClick={() => resetState('screen')}>Sign out</Button>
                </Actions>
              </Stack>
            </Card>
          )}
        </Box>
      `}
    >
      {({ getState, setState, resetState }) => (
        <Box>
          {!getState('screen') && (
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
                  <Button onClick={() => resetState('screen')}>Sign out</Button>
                </Actions>
              </Stack>
            </Card>
          )}
        </Box>
      )}
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
