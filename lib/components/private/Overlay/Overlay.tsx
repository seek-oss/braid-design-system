import React from 'react';
import { useStyles } from 'sku/react-treat';
import { Box, BoxProps } from '../../Box/Box';
import { hideFocusRingsClassName } from '../hideFocusRings/hideFocusRings';
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
  onlyVisibleForKeyboardNavigation?: boolean;
}

export const Overlay = ({
  background,
  borderRadius,
  boxShadow,
  transition,
  visible = false,
  onlyVisibleForKeyboardNavigation = false,
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
      top={0}
      bottom={0}
      left={0}
      right={0}
      className={[
        !visible ? styles.hidden : null,
        onlyVisibleForKeyboardNavigation ? hideFocusRingsClassName : null,
        className,
      ]}
    >
      {children}
    </Box>
  );
};
