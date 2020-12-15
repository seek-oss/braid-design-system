import React from 'react';
import { ComponentDetails } from '../../../site/src/types';
import { Button, Box, Text, TextLink, Inline, Strong, IconDelete } from '../';
import source from '../../utils/source.macro';

const docs: ComponentDetails = {
  category: 'Content',
  migrationGuide: true,
  Example: () =>
    source(
      <Inline space="small" collapseBelow="desktop">
        <Button weight="strong">Strong Button</Button>
        <Button>Regular Button</Button>
        <Button weight="weak">Weak Button</Button>
      </Inline>,
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
      Example: () =>
        source(
          <Box background="brand" padding="large" borderRadius="standard">
            <Inline space="small">
              <Button weight="weak">Weak Button</Button>
            </Inline>
          </Box>,
        ),
    },
  ],
};

export default docs;
