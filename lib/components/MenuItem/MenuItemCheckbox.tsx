import React, { ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import { Box, IconTick } from '../';
import { BackgroundProvider } from '../Box/BackgroundContext';
import { MenuItemProps } from './MenuItem';
import { useMenuItem } from './useMenuItem';
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
        height="full"
        paddingRight="xsmall"
        display="flex"
        alignItems="center"
      >
        <Box
          borderRadius="standard"
          boxShadow="borderField"
          position="relative"
          className={styles.checkboxBorder}
          background="card"
        >
          <Box
            opacity={checked ? undefined : 0}
            transition="fast"
            width="full"
            height="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            style={{ padding: 2 }}
            position="relative"
            zIndex={1}
          >
            <BackgroundProvider value="formAccent">
              <IconTick size="fill" />
            </BackgroundProvider>
          </Box>
          <Box
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            background="formAccent"
            borderRadius="standard"
            opacity={checked ? undefined : 0}
            transition="fast"
          />
        </Box>
      </Box>
      <Box paddingRight="xsmall">
        <MenuItemChildren>{children}</MenuItemChildren>
      </Box>
    </Box>
  );
};
