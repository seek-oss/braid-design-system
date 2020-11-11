import React from 'react';
import { Snippets } from '../private/Snippets';
import { Heading } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Level 1',
    code: <Heading level="1">Heading</Heading>,
  },
  {
    name: 'Level 1 (Weak)',
    code: (
      <Heading level="1" weight="weak">
        Heading
      </Heading>
    ),
  },
  {
    name: 'Level 1 (centered)',
    code: (
      <Heading level="1" align="center">
        Heading
      </Heading>
    ),
  },
  {
    name: 'Level 2',
    code: <Heading level="2">Heading</Heading>,
  },
  {
    name: 'Level 2 (Weak)',
    code: (
      <Heading level="2" weight="weak">
        Heading
      </Heading>
    ),
  },
  {
    name: 'Level 3',
    code: <Heading level="3">Heading</Heading>,
  },
  {
    name: 'Level 3 (Weak)',
    code: (
      <Heading level="3" weight="weak">
        Heading
      </Heading>
    ),
  },
  {
    name: 'Level 4',
    code: <Heading level="4">Heading</Heading>,
  },
  {
    name: 'Level 4 (Weak)',
    code: (
      <Heading level="4" weight="weak">
        Heading
      </Heading>
    ),
  },
];
