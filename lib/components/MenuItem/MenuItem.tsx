import React, { ReactNode } from 'react';
import { Box } from '../Box/Box';
import {
  MenuItemChildrenProps,
  useMenuItem,
  UseMenuItemProps,
} from './useMenuItem';

export interface MenuItemProps
  extends Pick<UseMenuItemProps, 'tone' | 'onClick' | 'data'> {
  children: ReactNode;
  badge?: MenuItemChildrenProps['badge'];
  icon?: MenuItemChildrenProps['icon'];
}
export const MenuItem = ({
  children,
  onClick,
  data,
  tone,
  badge,
  icon,
}: MenuItemProps) => {
  const { menuItemProps, MenuItemChildren } = useMenuItem<HTMLButtonElement>({
    tone,
    onClick,
    data,
  });

  return (
    <Box {...menuItemProps} component="button" type="button">
      <MenuItemChildren tone={tone} icon={icon} badge={badge}>
        {children}
      </MenuItemChildren>
    </Box>
  );
};
MenuItem.__isMenuItem__ = true;
