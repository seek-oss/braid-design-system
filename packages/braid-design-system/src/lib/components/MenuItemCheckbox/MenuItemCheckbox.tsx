import type { ReactNode, FC } from 'react';

import { Box } from '../Box/Box';
import type { MenuItemProps } from '../MenuItem/MenuItem';
import { useMenuItem } from '../MenuItem/useMenuItem';
import { IconTick } from '../icons/IconTick/IconTick';

import * as styles from './MenuItemCheckbox.css';

export interface MenuItemCheckboxProps
  extends Pick<MenuItemProps, 'data' | 'badge' | 'id'> {
  children: ReactNode;
  onChange: (checked: boolean) => void;
  checked: boolean;
}
export const MenuItemCheckbox: FC<MenuItemCheckboxProps> = ({
  children,
  onChange,
  checked,
  data,
  badge,
  id,
}) => {
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
      <MenuItemChildren
        tone={undefined}
        leftSlot={
          <Box
            component="span"
            display="block"
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
        }
        badge={badge}
        isCheckbox={true}
      >
        {children}
      </MenuItemChildren>
    </Box>
  );
};
// @ts-expect-error __isMenuItem__ Braid custom property
MenuItemCheckbox.__isMenuItem__ = true;
