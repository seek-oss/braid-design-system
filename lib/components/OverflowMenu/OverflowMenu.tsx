import React from 'react';
import { useStyles } from 'sku/treat';
import { Menu, MenuProps } from '../Menu/Menu';
import { OverflowButton } from '../iconButtons/OverflowButton/OverflowButton';
import { Box } from '../Box/Box';
import * as styleRefs from './OverflowMenu.treat';

interface OverflowMenuProps extends Omit<MenuProps, 'trigger' | 'align'> {
  label: string;
}

export const OverflowMenu = ({
  label,
  children,
  ...menuProps
}: OverflowMenuProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Menu
      trigger={(triggerProps, { open }) => (
        <Box className={styles.triggerOffset}>
          <OverflowButton label={label} active={open} {...triggerProps} />
        </Box>
      )}
      align="right"
      {...menuProps}
    >
      {children}
    </Menu>
  );
};
