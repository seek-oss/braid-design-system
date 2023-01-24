import React from 'react';
import type { MenuItemLinkProps } from './MenuItemLink';
import { MenuItemLink as BraidMenuItemLink } from './MenuItemLink';

export const MenuItemLink = ({ badge, ...restProps }: MenuItemLinkProps) => (
  <BraidMenuItemLink
    badge={typeof badge === 'boolean' ? undefined : badge}
    {...restProps}
  />
);
MenuItemLink.__isMenuItem__ = true;
