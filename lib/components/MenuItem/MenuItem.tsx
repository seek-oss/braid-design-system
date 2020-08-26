import React, { ReactNode } from 'react';
import { Box } from '../';
import { useMenuItem, UseMenuItemProps } from './useMenuItem';

export interface MenuItemProps
  extends Pick<UseMenuItemProps, 'onClick' | 'data'> {
  children: ReactNode;
}
export const MenuItem = ({ children, onClick, data }: MenuItemProps) => {
  const { menuItemProps, MenuItemChildren } = useMenuItem<HTMLButtonElement>({
    onClick,
    data,
  });

  return (
    <Box {...menuItemProps} component="button" type="button">
      <MenuItemChildren>{children}</MenuItemChildren>
    </Box>
  );
};
