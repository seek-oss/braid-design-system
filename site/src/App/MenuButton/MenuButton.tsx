import React from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { Hidden, Box } from '../../../../lib/components';
import * as styleRefs from './MenuButton.treat';

interface MenuButtonProps {
  open?: boolean;
  onClick: () => void;
}

export const MenuButton = ({ open = false, onClick }: MenuButtonProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Hidden print>
      <Box
        component="button"
        cursor="pointer"
        position="relative"
        className={classnames({
          [styles.root]: true,
          [styles.isOpen]: open,
        })}
        onClick={onClick}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        <Box
          position="absolute"
          className={classnames(styles.bar, styles.bar1)}
        />
        <Box
          position="absolute"
          className={classnames(styles.bar, styles.bar2)}
        />
        <Box
          position="absolute"
          className={classnames(styles.bar, styles.bar3)}
        />
      </Box>
    </Hidden>
  );
};
