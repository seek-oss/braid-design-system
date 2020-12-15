import React from 'react';
import { Snippets } from '../private/Snippets';
import { Button } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: <Button>Button</Button>,
  },
  {
    name: 'Strong',
    code: <Button weight="strong">Button</Button>,
  },
  {
    name: 'Weak',
    code: <Button weight="weak">Button</Button>,
  },
  {
    name: 'Critical',
    code: <Button tone="critical">Button</Button>,
  },
  {
    name: 'Critical Weak',
    code: (
      <Button weight="weak" tone="critical">
        Button
      </Button>
    ),
  },
];
