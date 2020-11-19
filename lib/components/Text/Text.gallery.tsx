import React from 'react';
import { Box, Text } from '../';
import { ComponentExample } from '../../../site/src/types';

export const galleryItems: ComponentExample[] = [
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
];
