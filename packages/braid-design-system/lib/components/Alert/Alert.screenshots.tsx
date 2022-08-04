import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Alert, Text, Stack, TextLink, List } from '../';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Info Alert',
      Example: () => (
        <Alert tone="info">
          <Text>This is an important piece of information.</Text>
        </Alert>
      ),
    },
    {
      label: 'Info Alert on a surface',
      background: 'surface',
      Example: () => (
        <Alert tone="info">
          <Text>This is an important piece of information.</Text>
        </Alert>
      ),
    },
    {
      label: 'Dismissible alert',
      Example: () => (
        <Alert tone="info" onClose={() => {}} closeLabel="Close info alert">
          <Text>This is an important piece of information.</Text>
        </Alert>
      ),
    },
    {
      label: 'Alert with rich content',
      Example: () => (
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
        </Alert>
      ),
    },
    {
      label: 'Promote Alert',
      Example: () => (
        <Alert tone="promote">
          <Text>This is a promoted piece of information.</Text>
        </Alert>
      ),
    },
    {
      label: 'Promote Alert on a surface',
      background: 'surface',
      Example: () => (
        <Alert tone="promote">
          <Text>This is a promoted piece of information.</Text>
        </Alert>
      ),
    },
    {
      label: 'Caution Alert',
      Example: () => (
        <Alert tone="caution">
          <Text>This is a cautionary piece of information.</Text>
        </Alert>
      ),
    },
    {
      label: 'Caution Alert on a surface',
      background: 'surface',
      Example: () => (
        <Alert tone="caution">
          <Text>This is a cautionary piece of information.</Text>
        </Alert>
      ),
    },
    {
      label: 'Critical Alert',
      Example: () => (
        <Alert tone="critical">
          <Text>This is a critical piece of information.</Text>
        </Alert>
      ),
    },
    {
      label: 'Critical Alert on a surface',
      background: 'surface',
      Example: () => (
        <Alert tone="critical">
          <Text>This is a critical piece of information.</Text>
        </Alert>
      ),
    },
    {
      label: 'Positive Alert',
      Example: () => (
        <Alert tone="positive">
          <Text>This is a positive piece of information.</Text>
        </Alert>
      ),
    },
    {
      label: 'Positive Alert on a surface',
      background: 'surface',
      Example: () => (
        <Alert tone="positive">
          <Text>This is a positive piece of information.</Text>
        </Alert>
      ),
    },
  ],
};
