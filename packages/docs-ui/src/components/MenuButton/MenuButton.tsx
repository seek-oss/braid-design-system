import React from 'react';
import { Box } from 'braid-src/lib/components';
import { virtualTouchable } from 'braid-src/lib/components/private/touchable/virtualTouchable';
import * as typographyStyles from 'braid-src/lib/css/typography.css';
import * as styles from './MenuButton.css';

interface MenuButtonProps {
  open?: boolean;
  onClick: () => void;
}

export const MenuButton = ({ open = false, onClick }: MenuButtonProps) => (
  <Box
    component="button"
    cursor="pointer"
    position="relative"
    className={[
      styles.root,
      virtualTouchable(),
      typographyStyles.tone.neutral,
      open ? styles.isOpen : undefined,
    ]}
    onClick={onClick}
    aria-label={open ? 'Close menu' : 'Open menu'}
  >
    <Box
      position="absolute"
      transition="fast"
      left={0}
      right={0}
      top={0}
      className={[styles.bar, styles.bar1]}
    />
    <Box
      position="absolute"
      transition="fast"
      left={0}
      right={0}
      opacity={open ? 0 : undefined}
      className={[styles.bar, styles.bar2]}
    />
    <Box
      position="absolute"
      transition="fast"
      left={0}
      right={0}
      className={[styles.bar, styles.bar3]}
    />
  </Box>
);
