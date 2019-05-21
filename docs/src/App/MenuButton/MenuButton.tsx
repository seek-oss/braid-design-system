import React from 'react';
import { useClassNames } from 'sku/treat';
import { Hidden } from '../../../../lib/components';
import * as styles from './MenuButton.treat';

interface MenuButtonProps {
  open?: boolean;
  onClick: () => void;
}

export const MenuButton = ({ open = false, onClick }: MenuButtonProps) => (
  <Hidden print>
    <button
      className={useClassNames({
        [styles.root]: true,
        [styles.isOpen]: open,
      })}
      onClick={onClick}
      aria-label={open ? 'Close menu' : 'Open menu'}
    >
      <div className={useClassNames(styles.bar, styles.bar1)} />
      <div className={useClassNames(styles.bar, styles.bar2)} />
      <div className={useClassNames(styles.bar, styles.bar3)} />
    </button>
  </Hidden>
);
