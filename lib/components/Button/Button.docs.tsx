import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import {
  Button,
  Card,
  Stack,
  Box,
  Text,
  TextLink,
  Inline,
  Strong,
  IconSend,
  IconDelete,
} from '../';
import source from '../../utils/source.macro';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  Example: () =>
    source(
      <Card>
        <Stack space="medium">
          <Inline space="small" collapseBelow="desktop">
            <Button weight="strong">Strong</Button>
            <Button>Regular</Button>
            <Button weight="weak">Weak</Button>
          </Inline>
          <Inline space="small" collapseBelow="desktop">
            <Button weight="strong" size="small">
              Strong
            </Button>
            <Button size="small">Regular</Button>
            <Button weight="weak" size="small">
              Weak
            </Button>
          </Inline>
        </Stack>
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
      label: 'Sizes',
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
                <Button weight="strong">Strong</Button>
                <Button>Regular</Button>
                <Button weight="weak">Weak</Button>
              </Inline>
            </Stack>
            <Stack space="small">
              <Text tone="secondary" weight="strong">
                Small size
              </Text>
              <Inline space="small" collapseBelow="desktop">
                <Button weight="strong" size="small">
                  Strong
                </Button>
                <Button size="small">Regular</Button>
                <Button weight="weak" size="small">
                  Weak
                </Button>
              </Inline>
            </Stack>
          </Stack>,
        ),
    },
    {
      label: 'Icons',
      description: (
        <Text>
          You can add an icon to the button by nesting an icon element inside.
          The size of the icon will adjust automatically based on the size on
          the button.
        </Text>
      ),
      Example: () =>
        source(
          <Inline space="small" alignY="center">
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
      label: 'Destructive actions',
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
            <Button tone="critical" weight="weak">
              <IconDelete /> Delete
            </Button>
          </Inline>,
        ),
    },
    {
      label: 'Contextual design',
      description: (
        <>
          <Text>
            Weak Button elements are inverted when rendered on a dark
            background.
          </Text>
          <Text>
            When using custom backgrounds or images, this behaviour can be
            applied using the{' '}
            <TextLink href="/components/BackgroundProvider">
              BackgroundProvider
            </TextLink>{' '}
            and specifying whether the background is dark or light.
          </Text>
        </>
      ),
      background: 'brand',
      Example: () =>
        source(
          <Box background="brand">
            <Inline space="small">
              <Button weight="weak">Weak Button</Button>
            </Inline>
          </Box>,
        ),
    },
  ],
};

export default docs;
