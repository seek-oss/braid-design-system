import React from 'react';
import type { MenuItemCheckboxProps } from './MenuItemCheckbox';
import { MenuItemCheckbox as BraidMenuItemCheckbox } from './MenuItemCheckbox';

export const MenuItemCheckbox = ({
  badge,
  ...restProps
}: MenuItemCheckboxProps) => (
  <BraidMenuItemCheckbox
    badge={typeof badge === 'boolean' ? undefined : badge}
    {...restProps}
  />
);
MenuItemCheckbox.__isMenuItem__ = true;
