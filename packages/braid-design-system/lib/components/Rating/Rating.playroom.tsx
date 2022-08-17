import React from 'react';
import { Rating as BraidRating, RatingProps } from './Rating';

export const Rating = ({ rating, ...restProps }: RatingProps) => (
  <BraidRating
    rating={typeof rating === 'number' ? rating : 0}
    {...restProps}
  />
);
