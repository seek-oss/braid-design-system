import React from 'react';
import { ButtonLink as BraidButtonLink, ButtonLinkProps } from './ButtonLink';

export const ButtonLink = ({
  href,
  onClick,
  ...restProps
}: ButtonLinkProps) => (
  <BraidButtonLink
    href={href ?? ''}
    onClick={onClick ? onClick : (event) => event?.preventDefault()}
    {...restProps}
  />
);
