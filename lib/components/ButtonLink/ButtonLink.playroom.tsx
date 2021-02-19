import React, { forwardRef } from 'react';
import {
  buttonVariants,
  buttonWeights,
} from '../ButtonRenderer/ButtonRenderer';
import { ButtonLink as BraidButtonLink, ButtonLinkProps } from './ButtonLink';

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ href, onClick, variant, weight, ...restProps }, ref) => {
    const isValidWeight = weight && buttonWeights.indexOf(weight) > -1;
    const isValidVariant = variant && buttonVariants.indexOf(variant) > -1;

    return (
      <BraidButtonLink
        ref={ref}
        href={href ?? ''}
        onClick={onClick ? onClick : (event) => event?.preventDefault()}
        variant={isValidVariant ? variant : undefined}
        weight={isValidWeight ? weight : undefined}
        {...restProps}
      />
    );
  },
);

ButtonLink.displayName = 'ButtonLink';
