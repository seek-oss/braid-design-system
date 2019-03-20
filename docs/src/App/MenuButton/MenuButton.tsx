import React from 'react';
import classnames from 'classnames';
import { Hidden } from '../../../../lib/components';
import styles from './MenuButton.css.js';

interface MenuButtonProps {
  open?: boolean;
  onClick: () => void;
}

export const MenuButton = ({ open = false, onClick }: MenuButtonProps) => (
  <Hidden print>
    <button
      className={classnames({
        [styles.root]: true,
        [styles.root_isOpen]: open,
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
