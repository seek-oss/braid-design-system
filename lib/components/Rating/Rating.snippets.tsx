import React from 'react';
import { Snippets } from '../private/Snippets';
import { Rating } from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(<Rating rating={3} />),
  },
  {
    name: 'Without text rating',
    code: source(<Rating rating={4.2} showTextRating={false} />),
  },
  {
    name: 'Large',
    code: source(<Rating rating={3.7} size="large" />),
  },
  {
    name: 'Single star with Rating',
    code: source(<Rating rating={3.7} showSingleStar={true} />),
  },
  {
    name: 'Single star without Rating',
    code: source(
      <Rating rating={3.7} showSingleStar={true} showTextRating={false} />,
    ),
  },
];
