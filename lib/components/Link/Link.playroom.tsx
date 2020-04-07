import React from 'react';
import { Link as CustomLink, LinkProps } from './Link';

export const Link = ({ href, onClick, ...restProps }: LinkProps) => (
  <CustomLink
    href={href ?? ''}
    onClick={onClick ? onClick : (event) => event?.preventDefault()}
    {...restProps}
  />
);
