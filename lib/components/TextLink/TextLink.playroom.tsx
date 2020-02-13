import React from 'react';
import { TextLink as BraidTextLink, TextLinkProps } from './TextLink';

export const TextLink = ({ href, onClick, ...restProps }: TextLinkProps) => (
  <BraidTextLink
    href={href ?? ''}
    onClick={onClick ? onClick : event => event?.preventDefault()}
    {...restProps}
  />
);
