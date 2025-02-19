import { cleanSpaceValue } from '../../playroom/cleanSpaceValue';

import { type SpreadProps, Spread as BraidSpread } from './Spread';

export const Spread = ({ space, ...restProps }: SpreadProps) => (
  <BraidSpread space={cleanSpaceValue(space) || 'none'} {...restProps} />
);
