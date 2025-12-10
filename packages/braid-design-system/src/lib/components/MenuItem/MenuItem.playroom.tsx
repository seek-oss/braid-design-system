import type { FC } from 'react';

import { type MenuItemProps, MenuItem as BraidMenuItem } from './MenuItem';

export const MenuItem: FC<MenuItemProps> = ({ badge, ...restProps }) => (
  <BraidMenuItem
    badge={typeof badge === 'boolean' ? undefined : badge}
    {...restProps}
  />
);
// @ts-expect-error __isMenuItem__ Braid custom property
MenuItem.__isMenuItem__ = true;
