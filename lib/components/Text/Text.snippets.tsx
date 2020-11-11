import React from 'react';
import { Snippets } from '../private/Snippets';
import { Text } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: <Text>Standard text</Text>,
  },
  {
    name: 'Small',
    code: <Text size="small">Small text</Text>,
  },
  {
    name: 'Large',
    code: <Text size="large">Large text</Text>,
  },
  {
    name: 'Tone (critical)',
    code: <Text tone="critical">Critical text</Text>,
  },
  {
    name: 'Tone (positive)',
    code: <Text tone="positive">Positive text</Text>,
  },
  {
    name: 'Tone (secondary)',
    code: <Text tone="secondary">Secondary text</Text>,
  },
  {
    name: 'Weight (strong)',
    code: <Text weight="strong">Strong text</Text>,
  },
  {
    name: 'Weight (medium)',
    code: <Text weight="medium">Medium text</Text>,
  },
];
