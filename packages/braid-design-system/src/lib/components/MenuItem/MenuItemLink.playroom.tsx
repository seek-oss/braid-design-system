import type { FC } from 'react';

import {
  type MenuItemLinkProps,
  MenuItemLink as BraidMenuItemLink,
} from './MenuItemLink';

export const MenuItemLink: FC<MenuItemLinkProps> = ({
  badge,
  ...restProps
}) => (
  <BraidMenuItemLink
    badge={typeof badge === 'boolean' ? undefined : badge}
    {...restProps}
  />
);
// @ts-expect-error __isMenuItem__ Braid custom property
MenuItemLink.__isMenuItem__ = true;
