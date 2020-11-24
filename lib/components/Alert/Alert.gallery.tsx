import React from 'react';
import source from '../../utils/source.macro';
import { ComponentExample } from '../../../site/src/types';
import { Alert, Text, Stack, TextLink, List } from '../';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Info Alert',
    Example: () =>
      source(
        <Alert tone="info">
          <Text>This is an important piece of information.</Text>
        </Alert>,
      ),
  },
  {
    label: 'Dismissible alert',
    Example: () =>
      source(
        <Alert tone="info" onClose={() => {}} closeLabel="Close info alert">
          <Text>This is an important piece of information.</Text>
        </Alert>,
      ),
  },
  {
    label: 'Alert with rich content',
    Example: () =>
      source(
        <Alert tone="info">
          <Stack space="large">
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
        </Alert>,
      ),
  },
  {
    label: 'Promote Alert',
    Example: () =>
      source(
        <Alert tone="promote">
          <Text>This is a promoted piece of information.</Text>
        </Alert>,
      ),
  },
  {
    label: 'Caution Alert',
    Example: () =>
      source(
        <Alert tone="caution">
          <Text>This is a cautionary piece of information.</Text>
        </Alert>,
      ),
  },
  {
    label: 'Critical Alert',
    Example: () =>
      source(
        <Alert tone="critical">
          <Text>This is a critical piece of information.</Text>
        </Alert>,
      ),
  },
  {
    label: 'Positive Alert',
    Example: () =>
      source(
        <Alert tone="positive">
          <Text>This is a positive piece of information.</Text>
        </Alert>,
      ),
  },
];
