import React from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { Hidden } from '../../../../lib/components';
import * as styleRefs from './MenuButton.treat';

interface MenuButtonProps {
  open?: boolean;
  onClick: () => void;
}

export const MenuButton = ({ open = false, onClick }: MenuButtonProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Hidden print>
      <button
        className={classnames({
          [styles.root]: true,
          [styles.isOpen]: open,
        })}
        onClick={onClick}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        <div className={classnames(styles.bar, styles.bar1)} />
        <div className={classnames(styles.bar, styles.bar2)} />
        <div className={classnames(styles.bar, styles.bar3)} />
      </button>
    </Hidden>
  );
};
