import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Alert, Text, Strong, Stack, TextLink, BulletList, Bullet } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <Stack space="large">
      <Text>
        Provides a strong inline notification to the user. If you’re looking for
        a lighter visual treatment, try{' '}
        <TextLink href="/components/Notice">Notice</TextLink> instead.
      </Text>
      <Text>
        <Strong>Note:</Strong> This component has only been designed to contain
        standard size text. Any other size of text will break the alignment with
        the icon.
      </Text>
    </Stack>
  ),
  migrationGuide: true,
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
            <BulletList space="medium">
              <Bullet>Bullet 1</Bullet>
              <Bullet>Bullet 2</Bullet>
              <Bullet>Bullet 3</Bullet>
            </BulletList>
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
      label: 'Caution Alert',
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
      label: 'Positive Alert',
      Example: () => (
        <Alert tone="positive">
          <Text>This is a positive piece of information.</Text>
        </Alert>
      ),
    },
  ],
  snippets: [
    {
      name: 'Critical',
      code: (
        <Alert tone="critical">
          <Text>Critical Alert</Text>
        </Alert>
      ),
    },
    {
      name: 'Caution',
      code: (
        <Alert tone="caution">
          <Text>Caution Alert</Text>
        </Alert>
      ),
    },
    {
      name: 'Positive',
      code: (
        <Alert tone="positive">
          <Text>Positive Alert</Text>
        </Alert>
      ),
    },
    {
      name: 'Info',
      code: (
        <Alert tone="info">
          <Text>Info Alert</Text>
        </Alert>
      ),
    },
    {
      name: 'Promote',
      code: (
        <Alert tone="promote">
          <Text>Promote Alert</Text>
        </Alert>
      ),
    },
    {
      name: 'Dismissible alert',
      code: (
        <Alert onClose={() => {}} closeLabel="Close">
          <Text>Dismissible Alert</Text>
        </Alert>
      ),
    },
  ],
};

export default docs;
