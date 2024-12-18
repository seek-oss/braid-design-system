import React, { type ReactNode } from 'react';
import { Box } from '../Box/Box';
import { IconTick } from '../icons/IconTick/IconTick';
import type { MenuItemProps } from '../MenuItem/MenuItem';
import { MenuItemLeftSlot, useMenuItem } from '../MenuItem/useMenuItem';

import * as styles from './MenuItemCheckbox.css';

export interface MenuItemCheckboxProps
  extends Pick<MenuItemProps, 'data' | 'badge' | 'id'> {
  children: ReactNode;
  onChange: (checked: boolean) => void;
  checked: boolean;
}
export const MenuItemCheckbox = ({
  children,
  onChange,
  checked,
  data,
  badge,
  id,
}: MenuItemCheckboxProps) => {
  const { menuItemProps, MenuItemChildren } = useMenuItem<HTMLButtonElement>({
    onClick: () => onChange(!checked),
    formElement: true,
    data,
    id,
  });

  return (
    <Box
      {...menuItemProps}
      aria-checked={checked}
      role="menuitemcheckbox"
      component="button"
      type="button"
      display="flex"
      alignItems="center"
    >
      <MenuItemLeftSlot>
        <Box
          component="span"
          borderRadius="standard"
          boxShadow="borderField"
          position="relative"
          background={{ lightMode: 'surface' }}
          flexShrink={0}
          className={styles.checkboxSize}
        >
          <Box
            component="span"
            position="absolute"
            inset={0}
            background="formAccent"
            borderRadius="standard"
            transition="fast"
            opacity={checked ? undefined : 0}
          >
            <IconTick size="fill" />
          </Box>
        </Box>
      </MenuItemLeftSlot>
      <MenuItemChildren
        tone={undefined}
        icon={undefined}
        badge={badge}
        formElement={true}
      >
        {children}
      </MenuItemChildren>
    </Box>
  );
};
MenuItemCheckbox.__isMenuItem__ = true;
