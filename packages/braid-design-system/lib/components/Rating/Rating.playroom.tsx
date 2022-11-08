import React from 'react';
import type { RatingProps } from './Rating';
import { Rating as BraidRating } from './Rating';

export const Rating = ({ rating, ...restProps }: RatingProps) => (
  <BraidRating
    rating={typeof rating === 'number' ? rating : 0}
    {...restProps}
  />
);
