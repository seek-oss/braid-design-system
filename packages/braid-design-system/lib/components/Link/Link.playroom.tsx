import React, { forwardRef } from 'react';
import type { LinkProps } from './Link';
import { Link as CustomLink } from './Link';

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, onClick, ...restProps }, ref) => (
    <CustomLink
      ref={ref}
      href={href ?? ''}
      onClick={onClick ? onClick : (event) => event?.preventDefault()}
      {...restProps}
    />
  ),
);
