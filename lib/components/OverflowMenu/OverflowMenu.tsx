import * as React from 'react';
import { useStyles } from 'sku/treat';
import { MenuRenderer, MenuRendererProps } from '../MenuRenderer/MenuRenderer';
import { OverflowButton } from '../iconButtons/OverflowButton/OverflowButton';
import { Box } from '../Box/Box';
import * as styleRefs from './OverflowMenu.treat';

interface OverflowMenuProps
  extends Omit<MenuRendererProps, 'trigger' | 'align' | 'offsetSpace'> {
  label: string;
}

export const OverflowMenu = ({
  label,
  children,
  ...menuProps
}: OverflowMenuProps) => {
  const styles = useStyles(styleRefs);

  return (
    <MenuRenderer
      trigger={(triggerProps, { open }) => (
        <Box className={styles.triggerOffset}>
          <OverflowButton label={label} active={open} {...triggerProps} />
        </Box>
      )}
      align="right"
      offsetSpace="small"
      {...menuProps}
    >
      {children}
    </MenuRenderer>
  );
};
