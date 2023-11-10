import React, { forwardRef } from 'react';
import { useFallbackId } from '../../playroom/utils';
import {
  type ButtonIconProps,
  ButtonIcon as BraidButtonIcon,
  buttonIconVariants,
  buttonIconTones,
} from './ButtonIcon';

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ variant, id, tone, ...restProps }, ref) => {
    const fallbackId = useFallbackId();
    const isValidVariant = variant && buttonIconVariants.indexOf(variant) > -1;
    const isValidTone = tone && buttonIconTones.indexOf(tone) > -1;

    return (
      <BraidButtonIcon
        ref={ref}
        id={id ?? fallbackId}
        variant={isValidVariant ? variant : undefined}
        tone={isValidTone ? tone : undefined}
        {...restProps}
      />
    );
  },
);

ButtonIcon.displayName = 'ButtonIcon';
