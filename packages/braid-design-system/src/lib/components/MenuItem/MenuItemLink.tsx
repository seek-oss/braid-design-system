import type { FC } from 'react';

import { Box } from '../Box/Box';
import { type LinkProps, Link } from '../Link/Link';

import type { MenuItemProps } from './MenuItem';
import { useMenuItem } from './useMenuItem';

export interface MenuItemLinkProps
  extends MenuItemProps,
    Pick<LinkProps, 'href' | 'target' | 'rel'> {}

export const MenuItemLink: FC<MenuItemLinkProps> = ({
  href,
  target,
  rel,
  onClick,
  tone,
  data,
  children,
  badge,
  icon,
  id,
}) => {
  const { menuItemProps, MenuItemChildren } = useMenuItem<HTMLAnchorElement>({
    displayName: 'MenuItemLink',
    onClick,
    tone,
    data,
    id,
  });

  return (
    <Box
      component={Link}
      {...menuItemProps}
      href={href}
      target={target}
      rel={rel}
    >
      <MenuItemChildren tone={tone} leftSlot={icon} badge={badge}>
        {children}
      </MenuItemChildren>
    </Box>
  );
};
// @ts-expect-error __isMenuItem__ Braid custom property
MenuItemLink.__isMenuItem__ = true;
