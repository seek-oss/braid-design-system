import React from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../../../../lib/components';
import { useTextTone } from '../../../../lib/hooks/typography';
import * as styleRefs from './MenuButton.treat';

interface MenuButtonProps {
  open?: boolean;
  onClick: () => void;
}

export const MenuButton = ({ open = false, onClick }: MenuButtonProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      component="button"
      cursor="pointer"
      position="relative"
      className={{
        [styles.root]: true,
        [styles.isOpen]: open,
        [useTextTone({ tone: 'neutral' })]: true,
      }}
      onClick={onClick}
      aria-label={open ? 'Close menu' : 'Open menu'}
    >
      <Box position="absolute" top={0} className={[styles.bar, styles.bar1]} />
      <Box position="absolute" className={[styles.bar, styles.bar2]} />
      <Box position="absolute" className={[styles.bar, styles.bar3]} />
    </Box>
  );
};
