import React from 'react';
import { Snippets } from '../private/Snippets';
import { Text } from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(<Text>Standard text</Text>),
  },
  {
    name: 'Large',
    code: source(<Text size="large">Large text</Text>),
  },
  {
    name: 'Small',
    code: source(<Text size="small">Small text</Text>),
  },
  {
    name: 'Xsmall',
    code: source(<Text size="xsmall">Xsmall text</Text>),
  },
  {
    name: 'Tone (critical)',
    code: source(<Text tone="critical">Critical text</Text>),
  },
  {
    name: 'Tone (positive)',
    code: source(<Text tone="positive">Positive text</Text>),
  },
  {
    name: 'Tone (secondary)',
    code: source(<Text tone="secondary">Secondary text</Text>),
  },
  {
    name: 'Weight (strong)',
    code: source(<Text weight="strong">Strong text</Text>),
  },
  {
    name: 'Weight (medium)',
    code: source(<Text weight="medium">Medium text</Text>),
  },
];
