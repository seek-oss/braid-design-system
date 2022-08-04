import React from 'react';
import {
  MenuItemLink as BraidMenuItemLink,
  MenuItemLinkProps,
} from './MenuItemLink';

export const MenuItemLink = ({ badge, ...restProps }: MenuItemLinkProps) => (
  <BraidMenuItemLink
    badge={typeof badge === 'boolean' ? undefined : badge}
    {...restProps}
  />
);
MenuItemLink.__isMenuItem__ = true;
