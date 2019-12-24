import React from 'react';
import { TextLink, TextLinkProps } from './TextLink';

export const PlayroomTextLink = ({
  href,
  onClick,
  ...restProps
}: TextLinkProps) => (
  <TextLink
    href={href ?? ''}
    onClick={onClick ? onClick : event => event?.preventDefault()}
    {...restProps}
  />
);
