import React, { forwardRef } from 'react';
import { buttonVariants } from '../ButtonRenderer/ButtonRenderer';
import { ButtonLink as BraidButtonLink, ButtonLinkProps } from './ButtonLink';

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ href, onClick, variant, ...restProps }, ref) => (
    <BraidButtonLink
      ref={ref}
      href={href ?? ''}
      onClick={onClick ? onClick : (event) => event?.preventDefault()}
      variant={
        variant && buttonVariants.indexOf(variant) > -1 ? variant : 'solid'
      }
      {...restProps}
    />
  ),
);

ButtonLink.displayName = 'ButtonLink';
