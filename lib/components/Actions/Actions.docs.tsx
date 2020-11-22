import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Actions, Button, TextLink, Stack, Text } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  description: (
    <Stack space="large">
      <Text>Typically used for actions at the end of forms.</Text>
      <Text>
        Should only contain{' '}
        <TextLink href="/components/Button">Button,</TextLink>{' '}
        <TextLink href="/components/ButtonLink">ButtonLink,</TextLink>{' '}
        <TextLink href="/components/TextLink">TextLink</TextLink> and{' '}
        <TextLink href="/components/TextLinkButton">TextLinkButton</TextLink>{' '}
        elements.
      </Text>
    </Stack>
  ),
  examples: [
    {
      label: 'Actions with Strong Button and TextLink',
      Example: () => (
        <Actions>
          <Button weight="strong">Strong</Button>
          <TextLink href="#">TextLink</TextLink>
        </Actions>
      ),
    },
    {
      label: 'Actions with Regular Button and Weak Button',
      Example: () => (
        <Actions>
          <Button weight="regular">Regular</Button>
          <Button weight="weak">Weak</Button>
        </Actions>
      ),
    },
    {
      label: 'Actions with Weak Buttons and Regular Button',
      Example: () => (
        <Actions>
          <Button weight="weak">Weak</Button>
          <Button weight="weak">Weak</Button>
          <Button weight="regular">Regular</Button>
        </Actions>
      ),
    },
  ],
};

export default docs;
