import React, { forwardRef } from 'react';
import {
  buttonVariants,
  buttonWeights,
} from '../ButtonRenderer/ButtonRenderer';
import { Button as BraidButton, ButtonProps } from './Button';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, weight, ...restProps }, ref) => {
    const isValidWeight = weight && buttonWeights.indexOf(weight) > -1;
    const isValidVariant = variant && buttonVariants.indexOf(variant) > -1;

    return (
      <BraidButton
        ref={ref}
        variant={isValidVariant ? variant : undefined}
        weight={isValidWeight ? weight : undefined}
        {...restProps}
      />
    );
  },
);

Button.displayName = 'Button';
