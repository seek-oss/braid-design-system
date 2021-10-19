import type { ReactNode } from 'react';
import React from 'react';
import { Box } from '../Box/Box';
import type { UseMenuItemProps } from './useMenuItem';
import { useMenuItem } from './useMenuItem';

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
