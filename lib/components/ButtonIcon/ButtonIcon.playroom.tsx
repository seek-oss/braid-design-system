import React, { forwardRef } from 'react';
import { useFallbackId } from '../../playroom/utils';
import {
  ButtonIcon as BraidButtonIcon,
  ButtonIconProps,
  buttonIconVariants,
} from './ButtonIcon';

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ variant, id, ...restProps }, ref) => {
    const fallbackId = useFallbackId();
    const isValidVariant = variant && buttonIconVariants.indexOf(variant) > -1;

    return (
      <BraidButtonIcon
        ref={ref}
        id={id ?? fallbackId}
        variant={isValidVariant ? variant : undefined}
        {...restProps}
      />
    );
  },
);

ButtonIcon.displayName = 'ButtonIcon';
