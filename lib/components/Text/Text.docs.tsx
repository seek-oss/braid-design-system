import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Box, Text, Stack } from '../';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  examples: [
    { label: 'Standard Text', Example: () => <Text>Standard text.</Text> },
    {
      label: 'Small Text',
      Example: () => <Text size="small">Small text.</Text>,
    },
    {
      label: 'Large Text',
      Example: () => <Text size="large">Large text.</Text>,
    },
    {
      label: 'Truncating long text',
      Example: () => (
        <Box style={{ width: 90 }}>
          <Text truncate>Long piece of text</Text>
        </Box>
      ),
    },
    {
      label: 'Text on Brand Background',
      background: 'brand',
      Container,
      Example: () => (
        <Stack space="small">
          <Text>Neutral text</Text>
          <Text tone="secondary">Secondary text</Text>
        </Stack>
      ),
    },
  ],
};

export default docs;
