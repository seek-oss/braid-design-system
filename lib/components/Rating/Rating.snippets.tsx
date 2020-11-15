import React from 'react';
import { Snippets } from '../private/Snippets';
import { Rating } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: <Rating rating={3} />,
  },
  {
    name: 'Without text rating',
    code: <Rating rating={4.2} showTextRating={false} />,
  },
  {
    name: 'Large',
    code: <Rating rating={3.7} size="large" />,
  },
];
