import React, { forwardRef } from 'react';
import {
  ButtonIcon as BraidButtonIcon,
  ButtonIconProps,
  buttonIconVariants,
} from './ButtonIcon';

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ variant, ...restProps }, ref) => {
    const isValidVariant = variant && buttonIconVariants.indexOf(variant) > -1;

    return (
      <BraidButtonIcon
        ref={ref}
        variant={isValidVariant ? variant : undefined}
        {...restProps}
      />
    );
  },
);

ButtonIcon.displayName = 'ButtonIcon';
