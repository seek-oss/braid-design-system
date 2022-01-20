import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import {
  Button,
  Card,
  Stack,
  Box,
  Heading,
  Text,
  TextLink,
  Inline,
  Strong,
  IconSend,
  IconDelete,
  Notice,
} from '../';
import source from '../../utils/source.macro';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  Example: () =>
    source(
      <Card rounded>
        <Inline space="small" collapseBelow="desktop">
          <Button>Solid</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="soft">Soft</Button>
          <Button variant="transparent">Transparent</Button>
        </Inline>
      </Card>,
    ),
  alternatives: [
    {
      name: 'ButtonLink',
      description: 'For a semantic link that looks like a button.',
    },
    {
      name: 'TextLinkButton',
      description: 'For a semantic button that looks like a link.',
    },
  ],
  additional: [
    {
      label: 'Variants',
      background: 'surface',
      description: (
        <Text>
          You can customise the appearance of the button via the{' '}
          <Strong>variant</Strong> prop, which accepts either{' '}
          <Strong>solid</Strong>, <Strong>ghost</Strong>, <Strong>soft</Strong>{' '}
          or <Strong>transparent</Strong>.
        </Text>
      ),
      Example: () =>
        source(
          <Inline space="small" collapseBelow="desktop">
            <Button variant="solid">Solid</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="soft">Soft</Button>
            <Button variant="transparent">Transparent</Button>
          </Inline>,
        ),
    },
    {
      label: 'Sizes',
      background: 'surface',
      description: (
        <Text>
          You can customise the size of the button via the <Strong>size</Strong>{' '}
          prop, which accepts either <Strong>standard</Strong> or{' '}
          <Strong>small.</Strong>
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="large">
            <Stack space="small">
              <Text tone="secondary" weight="strong">
                Standard size
              </Text>
              <Inline space="small" collapseBelow="desktop">
                <Button>Solid</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="soft">Soft</Button>
                <Button variant="transparent">Transparent</Button>
              </Inline>
            </Stack>
            <Stack space="small">
              <Text tone="secondary" weight="strong">
                Small size
              </Text>
              <Inline space="small" collapseBelow="desktop">
                <Button size="small">Solid</Button>
                <Button variant="ghost" size="small">
                  Ghost
                </Button>
                <Button variant="soft" size="small">
                  Soft
                </Button>
                <Button variant="transparent" size="small">
                  Transparent
                </Button>
              </Inline>
            </Stack>
          </Stack>,
        ),
    },
    {
      label: 'Icons',
      background: 'surface',
      description: (
        <Text>
          You can add an icon to the button by nesting an icon element inside.
          The size of the icon will adjust automatically based on the size on
          the button.
        </Text>
      ),
      Example: () =>
        source(
          <Inline space="gutter" alignY="center">
            <Stack space="small" align="center">
              <Text tone="secondary" weight="strong">
                Standard size
              </Text>
              <Button>
                <IconSend /> Send
              </Button>
            </Stack>
            <Stack space="small" align="center">
              <Text tone="secondary" weight="strong">
                Small size
              </Text>
              <Button size="small">
                <IconSend /> Send
              </Button>
            </Stack>
          </Inline>,
        ),
    },
    {
      label: 'Loading Button',
      background: 'surface',
      description: (
        <>
          <Text>
            You can indicate a loading state inline with the{' '}
            <Strong>loading</Strong> prop, which also ensures that the button is
            disabled.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Inline space="small">
            <Button loading>Loading Button</Button>
          </Inline>,
        ),
    },
    {
      label: 'Branding',
      background: 'surface',
      description: (
        <Text>
          For hero actions that want to leverage the brand colour, you can set
          the button’s <Strong>tone</Strong> to <Strong>brandAccent.</Strong>
        </Text>
      ),
      Example: () =>
        source(
          <Inline space="small">
            <Button tone="brandAccent">Search</Button>
            <Button tone="brandAccent" variant="ghost">
              Search
            </Button>
            <Button tone="brandAccent" variant="soft">
              Search
            </Button>
            <Button tone="brandAccent" variant="transparent">
              Search
            </Button>
          </Inline>,
        ),
    },
    {
      label: 'Destructive actions',
      background: 'surface',
      description: (
        <Text>
          For destructive actions like “Delete” you can set the button’s{' '}
          <Strong>tone</Strong> to <Strong>critical.</Strong>
        </Text>
      ),
      Example: () =>
        source(
          <Inline space="small">
            <Button tone="critical">
              <IconDelete /> Delete
            </Button>
            <Button tone="critical" variant="ghost">
              <IconDelete /> Delete
            </Button>
            <Button tone="critical" variant="soft">
              <IconDelete /> Delete
            </Button>
            <Button tone="critical" variant="transparent">
              <IconDelete /> Delete
            </Button>
          </Inline>,
        ),
    },
    {
      label: 'De-emphasized actions',
      background: 'surface',
      description: (
        <>
          <Text>
            For cases where actions need to be de-emphasized, the{' '}
            <Strong>tone</Strong> can be set to <Strong>neutral.</Strong>
          </Text>
          <Text>
            This makes the button follow the default text colour, including{' '}
            <TextLink href="#contextual-design">
              inverting on dark surfaces
            </TextLink>{' '}
            to improve contrast.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Inline space="small">
            <Button tone="neutral">Solid</Button>
            <Button tone="neutral" variant="ghost">
              Ghost
            </Button>
            <Button tone="neutral" variant="soft">
              Soft
            </Button>
            <Button tone="neutral" variant="transparent">
              Transparent
            </Button>
          </Inline>,
        ),
    },
    {
      label: 'Contextual design',
      description: (
        <>
          <Text>
            The <Strong>ghost</Strong>, <Strong>soft</Strong>, and{' '}
            <Strong>transparent</Strong> variants automatically lighten their
            foreground colour to improve contrast against a dark background. To
            compliment this, the hover and active backgrounds remove the colour
            in favour of a white translucency.
          </Text>
          <Notice>
            <Text>
              A <Strong>solid</Strong> button with a <Strong>neutral</Strong>{' '}
              tone will also be inverted to improve contrast.
            </Text>
          </Notice>
          <Text>
            When using custom background colours or images on a{' '}
            <TextLink href="components/Box">Box</TextLink> component, this
            behaviour can be applied by setting the <Strong>background</Strong>{' '}
            to either <Strong>customLight</Strong> or{' '}
            <Strong>customDark</Strong>.
          </Text>
        </>
      ),
      background: 'neutral',
      Example: () =>
        source(
          <Box background="neutral">
            <Stack space="small">
              <Inline space="small">
                <Button>Solid</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="soft">Soft</Button>
                <Button variant="transparent">Transparent</Button>
              </Inline>
              <Inline space="small">
                <Button tone="brandAccent">Solid</Button>
                <Button tone="brandAccent" variant="ghost">
                  Ghost
                </Button>
                <Button tone="brandAccent" variant="soft">
                  Soft
                </Button>
                <Button tone="brandAccent" variant="transparent">
                  Transparent
                </Button>
              </Inline>
              <Inline space="small">
                <Button tone="critical">Solid</Button>
                <Button tone="critical" variant="ghost">
                  Ghost
                </Button>
                <Button tone="critical" variant="soft">
                  Soft
                </Button>
                <Button tone="critical" variant="transparent">
                  Transparent
                </Button>
              </Inline>
              <Inline space="small">
                <Button tone="neutral">Solid</Button>
                <Button tone="neutral" variant="ghost">
                  Ghost
                </Button>
                <Button tone="neutral" variant="soft">
                  Soft
                </Button>
                <Button tone="neutral" variant="transparent">
                  Transparent
                </Button>
              </Inline>
            </Stack>
          </Box>,
        ),
    },
    {
      label: 'Vertical bleed',
      description: (
        <>
          <Text>
            With the <Strong>bleedY</Strong> prop, you can allow the background
            colour to bleed out into the surrounding layout.
          </Text>
          <Text>
            For example, we can align a button to a{' '}
            <TextLink href="/components/Heading">Heading</TextLink> element
            using an <TextLink href="/components/Inline">Inline</TextLink>, even
            though the button is actually taller than the heading. If we didn’t
            use the <Strong>bleedY</Strong> prop in this case, the button would
            introduce unwanted space above and below the heading.
          </Text>
        </>
      ),
      background: 'surface',
      Example: () =>
        source(
          <Stack space="large">
            <Stack space="small">
              <Text tone="secondary" weight="strong">
                Standard size
              </Text>
              <Box
                background="neutralLight"
                borderRadius="standard"
                padding="gutter"
              >
                <Box background="surface">
                  <Inline space="xsmall" alignY="center">
                    <Heading level="2">Heading</Heading>
                    <Button bleedY>Button</Button>
                  </Inline>
                </Box>
              </Box>
            </Stack>
            <Stack space="small">
              <Text tone="secondary" weight="strong">
                Small size
              </Text>
              <Box
                background="neutralLight"
                borderRadius="standard"
                padding="gutter"
              >
                <Box background="surface">
                  <Inline space="xsmall" alignY="center">
                    <Heading level="2">Heading</Heading>
                    <Button bleedY size="small">
                      Button
                    </Button>
                  </Inline>
                </Box>
              </Box>
            </Stack>
          </Stack>,
        ),
    },
  ],
};

export default docs;
