import React from 'react';
import { Snippets } from '../private/Snippets';
import { Checkbox, Badge } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: <Checkbox label="Label" />,
  },
  {
    name: 'With description',
    code: <Checkbox label="Label" description="Description" />,
  },
  {
    name: 'With a Badge',
    code: (
      <Checkbox label="Label" badge={<Badge weight="strong">Badge</Badge>} />
    ),
  },
];
