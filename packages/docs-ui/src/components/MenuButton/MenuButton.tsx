import { Box } from 'braid-design-system';

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
    className={[styles.root, open ? styles.isOpen : undefined]}
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
