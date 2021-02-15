import React from 'react';
import { buttonVariants } from '../ButtonRenderer/ButtonRenderer';
import { ButtonLink as BraidButtonLink, ButtonLinkProps } from './ButtonLink';

export const ButtonLink = ({
  href,
  onClick,
  variant,
  ...restProps
}: ButtonLinkProps) => (
  <BraidButtonLink
    href={href ?? ''}
    onClick={onClick ? onClick : (event) => event?.preventDefault()}
    variant={
      variant && buttonVariants.indexOf(variant) > -1 ? variant : 'solid'
    }
    {...restProps}
  />
);
