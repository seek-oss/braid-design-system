import React, { forwardRef } from 'react';

import { useFallbackId } from '../../playroom/utils';

import {
  type ButtonIconProps,
  ButtonIcon as BraidButtonIcon,
  buttonIconVariants,
  buttonIconTones,
  buttonIconSizes,
} from './ButtonIcon';

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ variant, id, tone, icon, size, ...restProps }, ref) => {
    const fallbackId = useFallbackId();
    const isValidVariant = variant && buttonIconVariants.indexOf(variant) > -1;
    const isValidTone = tone && buttonIconTones.indexOf(tone) > -1;

    if (!icon || typeof icon === 'boolean') {
      return null;
    }

    return (
      <BraidButtonIcon
        ref={ref}
        id={id ?? fallbackId}
        variant={isValidVariant ? variant : undefined}
        tone={isValidTone ? tone : undefined}
        icon={icon}
        size={size && buttonIconSizes.includes(size) ? size : undefined}
        {...restProps}
      />
    );
  },
);

ButtonIcon.displayName = 'ButtonIcon';
