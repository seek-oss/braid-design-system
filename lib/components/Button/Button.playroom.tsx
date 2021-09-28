import React, { forwardRef } from 'react';
import { buttonVariants } from '../Button/Button';
import { Button as BraidButton, ButtonProps } from './Button';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, ...restProps }, ref) => {
    const isValidVariant = variant && buttonVariants.indexOf(variant) > -1;

    return (
      <BraidButton
        ref={ref}
        variant={isValidVariant ? variant : undefined}
        {...restProps}
      />
    );
  },
);

Button.displayName = 'Button';
