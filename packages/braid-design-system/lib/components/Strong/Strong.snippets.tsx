import React from 'react';
import { Snippets } from '../private/Snippets';
import { Strong } from '../../playroom/components';
import source from '@braid-design-system/source.macro';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(<Strong>Strong text</Strong>),
  },
];
