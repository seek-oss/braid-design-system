import React from 'react';
import source from '../../utils/source.macro';
import { ComponentExample } from '../../../site/src/types';
import { Alert, Text, Stack, TextLink, List } from '../';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Promote',
    Example: () =>
      source(
        <Alert tone="promote">
          <Text>This is a promoted message.</Text>
        </Alert>,
      ),
  },
  {
    label: 'Info',
    Example: () =>
      source(
        <Alert tone="info">
          <Text>This is an informative message.</Text>
        </Alert>,
      ),
  },
  {
    label: 'Positive',
    Example: () =>
      source(
        <Alert tone="positive">
          <Text>This is a positive message.</Text>
        </Alert>,
      ),
  },
  {
    label: 'Caution',
    Example: () =>
      source(
        <Alert tone="caution">
          <Text>This is a cautionary message.</Text>
        </Alert>,
      ),
  },
  {
    label: 'Critical',
    Example: () =>
      source(
        <Alert tone="critical">
          <Text>This is a critical message.</Text>
        </Alert>,
      ),
  },
  {
    label: 'Dismissible',
    Example: () =>
      source(
        <Alert tone="info" onClose={() => {}} closeLabel="Close info alert">
          <Text>This is an informative message.</Text>
        </Alert>,
      ),
  },
  {
    label: 'With rich content',
    Example: () =>
      source(
        <Alert tone="info">
          <Stack space="large">
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
        </Alert>,
      ),
  },
];
