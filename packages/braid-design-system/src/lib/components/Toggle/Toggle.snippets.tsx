import React from 'react';
import type { Snippets } from '../private/Snippets';
import { Toggle } from '../../playroom/components';
import source from '@braid-design-system/source.macro';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(<Toggle label="Label" bleedY />),
  },
  {
    name: 'Small',
    code: source(<Toggle label="Label" size="small" bleedY />),
  },
  {
    name: 'Right aligned',
    code: source(<Toggle label="Label" align="right" bleedY />),
  },
  {
    name: 'Justified',
    code: source(<Toggle label="Label" align="justify" bleedY />),
  },
  {
    name: 'Trailing toggle position',
    code: source(<Toggle label="Label" togglePosition="trailing" bleedY />),
  },
];
