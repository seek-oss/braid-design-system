import React, { forwardRef } from 'react';
import { buttonVariants } from '../ButtonRenderer/ButtonRenderer';
import { Button as BraidButton, ButtonProps } from './Button';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, ...restProps }, ref) => (
    <BraidButton
      ref={ref}
      variant={
        variant && buttonVariants.indexOf(variant) > -1 ? variant : 'solid'
      }
      {...restProps}
    />
  ),
);

Button.displayName = 'Button';
