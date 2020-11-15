import React from 'react';
import { Snippets } from '../private/Snippets';
import { Button } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: <Button>Submit</Button>,
  },
  {
    name: 'Strong',
    code: <Button weight="strong">Submit</Button>,
  },
  {
    name: 'Weak',
    code: <Button weight="weak">Submit</Button>,
  },
];
