import React, { forwardRef } from 'react';

import {
  type ButtonProps,
  buttonVariants,
  Button as BraidButton,
} from '../Button/Button';

import { buttonTones } from './buttonTones';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, tone, ...restProps }, ref) => {
    const isValidVariant = variant && buttonVariants.indexOf(variant) > -1;
    const isValidTone = tone && buttonTones.indexOf(tone) > -1;

    return (
      <BraidButton
        ref={ref}
        variant={isValidVariant ? variant : undefined}
        tone={isValidTone ? tone : undefined}
        {...restProps}
      />
    );
  },
);

Button.displayName = 'Button';
