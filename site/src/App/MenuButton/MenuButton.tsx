import React from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../../../../lib/components';
import { useTextTone } from '../../../../lib/hooks/typography';
import { useVirtualTouchable } from '../../../../lib/components/private/touchable/useVirtualTouchable';
import * as styleRefs from './MenuButton.treat';

interface MenuButtonProps {
  open?: boolean;
  onClick: () => void;
}

export const MenuButton = ({ open = false, onClick }: MenuButtonProps) => {
  const styles = useStyles(styleRefs);
  const virtualTouchable = useVirtualTouchable();

  return (
    <Box
      component="button"
      cursor="pointer"
      position="relative"
      className={[
        styles.root,
        virtualTouchable,
        useTextTone({ tone: 'neutral' }),
        open ? styles.isOpen : undefined,
      ]}
      onClick={onClick}
      aria-label={open ? 'Close menu' : 'Open menu'}
    >
      <Box position="absolute" top={0} className={[styles.bar, styles.bar1]} />
      <Box position="absolute" className={[styles.bar, styles.bar2]} />
      <Box position="absolute" className={[styles.bar, styles.bar3]} />
    </Box>
  );
};
