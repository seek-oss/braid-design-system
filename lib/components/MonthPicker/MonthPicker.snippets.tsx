import React from 'react';
import { Snippets } from '../private/Snippets';
import { MonthPicker } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: <MonthPicker label="Month" />,
  },
  {
    name: 'With error',
    code: <MonthPicker label="Month" tone="critical" message="Required" />,
  },
];
