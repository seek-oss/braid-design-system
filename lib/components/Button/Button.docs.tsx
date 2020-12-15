import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Button, Stack, Text, TextLink } from '../';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  description: (
    <Stack space="large">
      <Text>Renders a standard button element.</Text>
      <Text tone="secondary">
        If you want a link that looks like a button, check out{' '}
        <TextLink href="/components/ButtonLink">ButtonLink.</TextLink>
      </Text>
    </Stack>
  ),
  examples: [
    {
      label: 'Default Button',
      Container,
      Example: () => <Button>Submit</Button>,
    },
    {
      label: 'Strong Button',
      Container,
      Example: () => <Button weight="strong">Submit</Button>,
    },
    {
      label: 'Weak Button',
      Container,
      Example: () => <Button weight="weak">Submit</Button>,
    },
    {
      label: 'Default Critical Button',
      Container,
      Example: () => <Button tone="critical">Delete</Button>,
    },
    {
      label: 'Weak Critical Button',
      Container,
      Example: () => (
        <Button weight="weak" tone="critical">
          Delete
        </Button>
      ),
    },
    {
      label: 'Weak Button on Brand Background',
      background: 'brand',
      Container,
      Example: () => <Button weight="weak">Submit</Button>,
    },
    {
      label: 'Loading Button',
      Container,
      Example: () => <Button loading>Loading</Button>,
    },
  ],
};

export default docs;
