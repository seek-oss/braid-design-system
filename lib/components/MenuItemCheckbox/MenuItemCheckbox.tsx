import React, { ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import { IconTick } from '../icons/IconTick/IconTick';
import { MenuItemProps } from '../MenuItem/MenuItem';
import { useMenuItem } from '../MenuItem/useMenuItem';
import * as styleRefs from './MenuItemCheckbox.treat';

interface MenuItemCheckboxProps extends Omit<MenuItemProps, 'onClick'> {
  children: ReactNode;
  onChange: (checked: boolean) => void;
  checked: boolean;
}
export const MenuItemCheckbox = ({
  children,
  onChange,
  checked,
  data,
}: MenuItemCheckboxProps) => {
  const styles = useStyles(styleRefs);
  const { menuItemProps, MenuItemChildren } = useMenuItem<HTMLButtonElement>({
    onClick: () => onChange(!checked),
    formElement: true,
    data,
  });

  return (
    <Box
      {...menuItemProps}
      aria-checked={checked}
      role="menuitemcheckbox"
      component="button"
      type="button"
      display="flex"
    >
      <Box
        borderRadius="standard"
        boxShadow="borderField"
        position="relative"
        background="card"
        marginRight="xsmall"
        className={styles.checkboxBorder}
      >
        <Box
          position="absolute"
          width="full"
          height="full"
          background="formAccent"
          borderRadius="standard"
          transition="fast"
          opacity={checked ? undefined : 0}
          className={styles.checkboxPadding}
        >
          <IconTick size="fill" />
        </Box>
      </Box>
      <MenuItemChildren>{children}</MenuItemChildren>
    </Box>
  );
};
