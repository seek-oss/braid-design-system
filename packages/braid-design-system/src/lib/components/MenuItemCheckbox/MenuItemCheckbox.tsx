import React, { type ReactNode } from 'react';
import { Box } from '../Box/Box';
import { IconTick } from '../icons/IconTick/IconTick';
import type { MenuItemProps } from '../MenuItem/MenuItem';
import { useMenuItem } from '../MenuItem/useMenuItem';
import { iconSlotSpace } from '../private/iconSlotSpace';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';

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
  const legacy = useBraidTheme().legacy;
  const iconSpace = legacy ? 'xsmall' : iconSlotSpace;

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
      <Box
        component="span"
        borderRadius="standard"
        boxShadow="borderField"
        position="relative"
        background={{ lightMode: 'surface' }}
        marginRight={iconSpace}
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
