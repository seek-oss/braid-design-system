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
      This might seem like an odd thing to point out—after all, how else is a
      checkbox supposed to work? Well, typically in React we manage the state
      from <Strong>outside</Strong> the component.
    </Text>
    <Text>
      As a basic example, if we wanted our checkbox to be checked, we can set
      its <Strong>checked</Strong> prop to <Strong>true:</Strong>
    </Text>
    <Code>
      <Checkbox checked={true} label="Checked" />
    </Code>
    <Text>
      Equally, we can set its <Strong>checked</Strong> state to{' '}
      <Strong>false:</Strong>
    </Text>
    <Code>
      <Checkbox checked={false} label="Unchecked" />
    </Code>
    <Text>
      Note that we are now unable to change the state of the checkbox by
      clicking on it. Go ahead—try clicking the examples now. You’ll see that it
      no longer has any effect. This is obviously a bit useless, so let’s fix
      that.
    </Text>
    <Heading level="3">Getting and setting state</Heading>
    <Text>
      Within Braid’s Playroom, we’re provided with <Strong>setState</Strong> and{' '}
      <Strong>getState</Strong> functions that allow us to manage the overall
      state of our prototype. If we wire them up to the checkbox, it looks
      something like this:
    </Text>
    <Code
      displayCode={`
        <Checkbox
          checked={getState('checked')}
          onChange={setState('checked')}
          label="Checkbox"
        />
      `}
    >
      {({ getState, setState }) => (
        <Checkbox
          checked={getState('checked')}
          onChange={setState('checked')}
          label="Checkbox"
        />
      )}
    </Code>
    <Text>
      Here you can see that we’re binding the state of checkbox to a piece of
      state called <Strong>checked</Strong>. Note that we could have called this
      piece of state whatever we want, so you’d typically give it a name more
      appropriate to your design, e.g.{' '}
      <Strong>{"getState('showMoreInfo')"}</Strong>.
    </Text>
    <Text>
      Okay, so we’re seemingly back where we started with an interactive
      checkbox. Why is this useful? Well, by managing the state externally,{' '}
      <Strong>our checkbox is now able to affect other parts of the UI.</Strong>
    </Text>
    <Text>
      As a minimal example, let’s make the checkbox toggle the visibility of
      another element:
    </Text>
    <Code
      displayCode={`
        <Stack space="medium">
          <Checkbox
            checked={getState('checked')}
            onChange={setState('checked')}
            label="Checkbox"
          />

          {getState('checked') && (
            <Notice tone="positive">
              <Text>Good job! You checked the checkbox!</Text>
            </Notice>
          )}
        </Stack>
      `}
    >
      {({ getState, setState }) => (
        <Stack space="medium">
          <Checkbox
            checked={getState('checked')}
            onChange={setState('checked')}
            label="Checkbox"
          />

          {getState('checked') && (
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
          <Checkbox
            checked={getState('checked')}
            onChange={setState('checked')}
            label="Checkbox"
          />

          {getState('checked') ? (
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
      {({ getState, setState }) => (
        <Stack space="medium">
          <Checkbox
            checked={getState('checked')}
            onChange={setState('checked')}
            label="Checkbox"
          />

          {getState('checked') ? (
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
        <Stack space="medium">
          <TextField
            value={getState('firstName')}
            onChange={setState('firstName')}
            label="First name"
          />

          <TextField
            value={getState('lastName')}
            onChange={setState('lastName')}
            label="Last name"
          />

          <Divider />

          {getState('firstName') && getState('lastName') ? (
            <Text weight="strong">
              👋 Hello {getState('firstName')} {getState('lastName')}!
            </Text>
          ) : null}
        </Stack>
      `}
    >
      {({ getState, setState }) => (
        <Stack space="medium">
          <TextField
            value={getState('firstName')}
            onChange={setState('firstName')}
            label="First name"
          />

          <TextField
            value={getState('lastName')}
            onChange={setState('lastName')}
            label="Last name"
          />

          <Divider />

          {getState('firstName') && getState('lastName') ? (
            <Text weight="strong">
              👋 Hello {getState('firstName')} {getState('lastName')}!
            </Text>
          ) : null}
        </Stack>
      )}
    </Code>

    <Text>
      It’s not just about form elements either. For example, we might want to
      provide a <TextLink href="/components/Button">Button</TextLink> that, via
      an <Strong>onClick</Strong> handler, toggles the <Strong>open</Strong>{' '}
      state of a <TextLink href="/components/Drawer">Drawer</TextLink>:
    </Text>
    <Code
      displayCode={`
        <Box>
          <Actions>
            <Button onClick={() => setState('drawer', true)}>
              Open drawer
            </Button>
          </Actions>

          <Drawer
            title="Drawer"
            open={getState('drawer')}
            onClose={() => setState('drawer', false)}
          >
            <Placeholder height={100} />
          </Drawer>
        </Box>
      `}
    >
      {({ getState, setState }) => (
        <Box>
          <Actions>
            <Button onClick={() => setState('drawer', true)}>
              Open drawer
            </Button>
          </Actions>

          <Drawer
            title="Drawer"
            open={getState('drawer')}
            onClose={() => setState('drawer', false)}
          >
            <Placeholder height={100} />
          </Drawer>
        </Box>
      )}
    </Code>

    <Heading level="3">Multiple screens</Heading>
    <Text>
      We can also leverage state to simulate having multiple screens by using a
      piece of state called <Strong>screen</Strong>.
    </Text>
    <Text>
      In this example we’re also making use of the <Strong>resetState</Strong>{' '}
      function to go back to the original screen.
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
      questions. Please reach out so we can give you a hand, and feed
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
