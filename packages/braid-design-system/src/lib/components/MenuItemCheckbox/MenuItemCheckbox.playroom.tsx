import type { FC } from 'react';

import {
  type MenuItemCheckboxProps,
  MenuItemCheckbox as BraidMenuItemCheckbox,
} from './MenuItemCheckbox';

export const MenuItemCheckbox: FC<MenuItemCheckboxProps> = ({
  badge,
  ...restProps
}) => (
  <BraidMenuItemCheckbox
    badge={typeof badge === 'boolean' ? undefined : badge}
    {...restProps}
  />
);
// @ts-expect-error __isMenuItem__ Braid custom property
MenuItemCheckbox.__isMenuItem__ = true;
