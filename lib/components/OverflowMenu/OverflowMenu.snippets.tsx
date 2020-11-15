import React from 'react';
import { Snippets } from '../private/Snippets';
import { OverflowMenu, MenuItem } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: (
      <OverflowMenu label="Options">
        <MenuItem>Option</MenuItem>
        <MenuItem>Option</MenuItem>
      </OverflowMenu>
    ),
  },
];
