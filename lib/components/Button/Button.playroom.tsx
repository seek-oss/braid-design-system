import React from 'react';
import {
  buttonVariants,
  buttonWeights,
} from '../ButtonRenderer/ButtonRenderer';
import { Button as BraidButton, ButtonProps } from './Button';

export const Button = ({ variant, weight, ...restProps }: ButtonProps) => {
  const isValidWeight = weight && buttonWeights.indexOf(weight) > -1;
  const isValidVariant = variant && buttonVariants.indexOf(variant) > -1;

  return (
    <BraidButton
      variant={isValidVariant ? variant : undefined}
      weight={isValidWeight ? weight : undefined}
      {...restProps}
    />
  );
};
