import { forwardRef } from 'react';

import {
  type ButtonIconProps,
  ButtonIcon as BraidButtonIcon,
  buttonIconVariants,
  buttonIconTones,
  buttonIconSizes,
} from './ButtonIcon';

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ variant, tone, icon, size, ...restProps }, ref) => {
    const isValidVariant = variant && buttonIconVariants.indexOf(variant) > -1;
    const isValidTone = tone && buttonIconTones.indexOf(tone) > -1;

    if (!icon || typeof icon === 'boolean') {
      return null;
    }

    return (
      <BraidButtonIcon
        ref={ref}
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
