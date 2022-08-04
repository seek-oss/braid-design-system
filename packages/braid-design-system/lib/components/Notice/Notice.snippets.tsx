import React from 'react';
import { Snippets } from '../private/Snippets';
import { Notice, Text } from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
  {
    name: 'Critical',
    code: source(
      <Notice tone="critical">
        <Text>Critical Notice</Text>
      </Notice>,
    ),
  },
  {
    name: 'Positive',
    code: source(
      <Notice tone="positive">
        <Text>Positive Notice</Text>
      </Notice>,
    ),
  },
  {
    name: 'Info',
    code: source(
      <Notice tone="info">
        <Text>Info Notice</Text>
      </Notice>,
    ),
  },
  {
    name: 'Promote',
    code: source(
      <Notice tone="promote">
        <Text>Promote Notice</Text>
      </Notice>,
    ),
  },
];
