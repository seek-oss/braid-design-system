import React, { ReactNode } from 'react';
import { Box } from '../Box/Box';
import { useMenuItem, UseMenuItemProps } from './useMenuItem';

export interface MenuItemProps
  extends Pick<UseMenuItemProps, 'tone' | 'onClick' | 'data'> {
  children: ReactNode;
}
export const MenuItem = ({ children, onClick, data, tone }: MenuItemProps) => {
  const { menuItemProps, MenuItemChildren } = useMenuItem<HTMLButtonElement>({
    tone,
    onClick,
    data,
  });

  return (
    <Box {...menuItemProps} component="button" type="button">
      <MenuItemChildren tone={tone}>{children}</MenuItemChildren>
    </Box>
  );
};
