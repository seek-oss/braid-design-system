import React, { forwardRef } from 'react';
import { buttonVariants } from '../Button/Button';
import {
  type ButtonLinkProps,
  ButtonLink as BraidButtonLink,
} from './ButtonLink';

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ variant, ...restProps }, ref) => {
    const isValidVariant = variant && buttonVariants.indexOf(variant) > -1;

    return (
      <BraidButtonLink
        ref={ref}
        variant={isValidVariant ? variant : undefined}
        {...restProps}
      />
    );
  },
);

ButtonLink.displayName = 'ButtonLink';
