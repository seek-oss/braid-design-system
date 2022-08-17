import React from 'react';
import { MenuItem as BraidMenuItem, MenuItemProps } from './MenuItem';

export const MenuItem = ({ badge, ...restProps }: MenuItemProps) => (
  <BraidMenuItem
    badge={typeof badge === 'boolean' ? undefined : badge}
    {...restProps}
  />
);
MenuItem.__isMenuItem__ = true;
