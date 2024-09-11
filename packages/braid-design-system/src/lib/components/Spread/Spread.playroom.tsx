import React from 'react';
import { type SpreadProps, Spread as BraidSpread } from './Spread';
import { cleanSpaceValue } from '../../playroom/cleanSpaceValue';
import type { RequiredResponsiveValue } from './Spread.css';
import type { Space } from '../../css/atoms/atoms';

export const Spread = ({ space, ...restProps }: SpreadProps) => {
  /* Temporary cast to satisfy `cleanSpaceValue`. Wont be required when `gap` moves to core atoms */
  const cleanSpace = cleanSpaceValue(space) as RequiredResponsiveValue<Space>;
  return <BraidSpread space={cleanSpace || 'none'} {...restProps} />;
};
