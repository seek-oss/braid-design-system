import type { ReactNode, FC } from 'react';

import { Box } from '../Box/Box';

import {
  type MenuItemChildrenProps,
  type UseMenuItemProps,
  useMenuItem,
} from './useMenuItem';

export interface MenuItemProps extends Pick<
  UseMenuItemProps,
  'tone' | 'onClick' | 'data' | 'id'
> {
  children: ReactNode;
  badge?: MenuItemChildrenProps['badge'];
  icon?: MenuItemChildrenProps['leftSlot'];
}
export const MenuItem: FC<MenuItemProps> = ({
  children,
  onClick,
  data,
  tone,
  badge,
  icon,
  id,
}) => {
  const { menuItemProps, MenuItemChildren } = useMenuItem<HTMLButtonElement>({
    tone,
    onClick,
    data,
    id,
  });

  return (
    <Box {...menuItemProps} component="button" type="button">
      <MenuItemChildren tone={tone} leftSlot={icon} badge={badge}>
        {children}
      </MenuItemChildren>
    </Box>
  );
};
// @ts-expect-error __isMenuItem__ Braid custom property
MenuItem.__isMenuItem__ = true;
