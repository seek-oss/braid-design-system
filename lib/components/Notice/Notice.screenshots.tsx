import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Notice, Text, Stack, TextLink, List } from '../';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Info Notice',
      Example: () => (
        <Notice tone="info">
          <Text>This is an important piece of information.</Text>
        </Notice>
      ),
    },
    {
      label: 'Notice with rich content',
      Example: () => (
        <Notice tone="info">
          <Stack space="medium">
            <Text>
              This is an important piece of information with a{' '}
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
    {
      label: 'Promote Notice',
      Example: () => (
        <Notice tone="promote">
          <Text>This is a promoted piece of information.</Text>
        </Notice>
      ),
    },
    {
      label: 'Critical Notice',
      Example: () => (
        <Notice tone="critical">
          <Text>This is a critical piece of information.</Text>
        </Notice>
      ),
    },
    {
      label: 'Positive Notice',
      Example: () => (
        <Notice tone="positive">
          <Text>This is a positive piece of information.</Text>
        </Notice>
      ),
    },
  ],
};
