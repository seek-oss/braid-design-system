import React from 'react';
import { Link, LinkProps } from '../Link/Link';
import { useMenuItem } from './useMenuItem';
import { MenuItemProps } from './MenuItem';
import { Box } from '../Box/Box';

export interface MenuItemLinkProps
  extends MenuItemProps,
    Pick<LinkProps, 'href' | 'target' | 'rel'> {}

export const MenuItemLink = ({
  href,
  target,
  rel,
  onClick,
  tone,
  data,
  children,
}: MenuItemLinkProps) => {
  const { menuItemProps, MenuItemChildren } = useMenuItem<HTMLAnchorElement>({
    displayName: 'MenuItemLink',
    onClick,
    tone,
    data,
  });

  return (
    <Box
      component={Link}
      {...menuItemProps}
      href={href}
      target={target}
      rel={rel}
    >
      <MenuItemChildren tone={tone}>{children}</MenuItemChildren>
    </Box>
  );
};
