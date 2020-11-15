import React from 'react';
import { Snippets } from '../private/Snippets';
import { Notice, Text } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Critical',
    code: (
      <Notice tone="critical">
        <Text>Critical Notice</Text>
      </Notice>
    ),
  },
  {
    name: 'Positive',
    code: (
      <Notice tone="positive">
        <Text>Positive Notice</Text>
      </Notice>
    ),
  },
  {
    name: 'Info',
    code: (
      <Notice tone="info">
        <Text>Info Notice</Text>
      </Notice>
    ),
  },
  {
    name: 'Promote',
    code: (
      <Notice tone="promote">
        <Text>Promote Notice</Text>
      </Notice>
    ),
  },
];
