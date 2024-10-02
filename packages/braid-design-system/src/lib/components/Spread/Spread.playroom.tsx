import React from 'react';
import { type SpreadProps, Spread as BraidSpread } from './Spread';
import { cleanSpaceValue } from '../../playroom/cleanSpaceValue';

export const Spread = ({ space, ...restProps }: SpreadProps) => (
  <BraidSpread space={cleanSpaceValue(space) || 'none'} {...restProps} />
);
