import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Notice, Text, Stack, TextLink, List } from '../';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Promote',
    Example: () => (
      <Notice tone="promote">
        <Text>This is a promoted message.</Text>
      </Notice>
    ),
  },
  {
    label: 'Info',
    Example: () => (
      <Notice tone="info">
        <Text>This is an informative message.</Text>
      </Notice>
    ),
  },
  {
    label: 'Positive',
    Example: () => (
      <Notice tone="positive">
        <Text>This is a positive message.</Text>
      </Notice>
    ),
  },
  {
    label: 'Critical',
    Example: () => (
      <Notice tone="critical">
        <Text>This is a critical message.</Text>
      </Notice>
    ),
  },
  {
    label: 'With rich content',
    Example: () => (
      <Notice tone="info">
        <Stack space="medium">
          <Text>
            This is an informative message with a{' '}
            <TextLink href="#">TextLink.</TextLink>
          </Text>
          <List space="medium">
            <Text>Bullet 1</Text>
            <Text>Bullet 2</Text>
            <Text>Bullet 3</Text>
          </List>
        </Stack>
      </Notice>
    ),
  },
];
