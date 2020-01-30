import React from 'react';
import { useStyles } from 'sku/react-treat';
import { Box, BoxProps } from '../../Box/Box';
import * as styleRefs from './Overlay.treat';

export interface OverlayProps
  extends Partial<
    Pick<
      BoxProps,
      | 'children'
      | 'background'
      | 'borderRadius'
      | 'boxShadow'
      | 'transition'
      | 'className'
    >
  > {
  visible?: boolean;
}

export const Overlay = ({
  background,
  borderRadius,
  boxShadow,
  transition,
  visible = false,
  className,
  children,
}: OverlayProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      position="absolute"
      pointerEvents="none"
      background={background}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      transition={transition}
      className={[styles.root, !visible ? styles.hidden : null, className]}
    >
      {children}
    </Box>
  );
};
