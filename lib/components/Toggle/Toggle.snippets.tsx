import React from 'react';
import { Snippets } from '../private/Snippets';
import { Toggle } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: <Toggle label="Toggle" />,
  },
  {
    name: 'Aligned right',
    code: <Toggle label="Toggled" align="right" />,
  },
  {
    name: 'Justified',
    code: <Toggle label="Toggled" align="justify" />,
  },
];
