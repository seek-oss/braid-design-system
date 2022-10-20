import React from 'react';
import { Snippets } from '../private/Snippets';
import { Rating } from '../../playroom/components';
import source from '@braid-design-system/source.macro';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(<Rating rating={3} />),
  },
  {
    name: 'Large',
    code: source(<Rating rating={3.7} size="large" />),
  },
  {
    name: 'Variant: starsOnly',
    code: source(<Rating rating={4.2} variant="starsOnly" />),
  },
  {
    name: 'Variant: minimal',
    code: source(<Rating rating={3.7} variant="minimal" />),
  },
];
