import React from 'react';
import { Alert, Text } from '../../playroom/components';
import source from '../../utils/source.macro';
import { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
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
    code: source(
      <Alert onClose={() => {}} closeLabel="Close">
        <Text>Dismissible Alert</Text>
      </Alert>,
    ),
  },
];
