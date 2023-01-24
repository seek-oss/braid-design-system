import React, { forwardRef } from 'react';
import type { ButtonProps } from '../Button/Button';
import { buttonVariants, Button as BraidButton } from '../Button/Button';

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
