import { Box } from '../Box/Box';
import { type LinkProps, Link } from '../Link/Link';

import type { MenuItemProps } from './MenuItem';
import { useMenuItem } from './useMenuItem';

export interface MenuItemLinkProps
  extends MenuItemProps, Pick<LinkProps, 'href' | 'target' | 'rel'> {}

export const MenuItemLink = ({
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
}: MenuItemLinkProps) => {
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
MenuItemLink.__isMenuItem__ = true;
