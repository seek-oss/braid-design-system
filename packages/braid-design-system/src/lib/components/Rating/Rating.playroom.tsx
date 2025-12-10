import type { FC } from 'react';

import { type RatingProps, Rating as BraidRating } from './Rating';

export const Rating: FC<RatingProps> = ({ rating, ...restProps }) => (
  <BraidRating
    rating={typeof rating === 'number' ? rating : 0}
    {...restProps}
  />
);
