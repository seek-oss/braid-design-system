import React from 'react';
import { Snippets } from '../private/Snippets';
import { OverflowMenu, MenuItem } from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(
      <OverflowMenu label="Options">
        <MenuItem>Option</MenuItem>
        <MenuItem>Option</MenuItem>
      </OverflowMenu>,
    ),
  },
];
