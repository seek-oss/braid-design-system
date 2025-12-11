import type { FC } from 'react';

import { cleanSpaceValue } from '../../playroom/cleanSpaceValue';

import { type SpreadProps, Spread as BraidSpread } from './Spread';

export const Spread: FC<SpreadProps> = ({ space, ...restProps }) => (
  <BraidSpread space={cleanSpaceValue(space) || 'none'} {...restProps} />
);
