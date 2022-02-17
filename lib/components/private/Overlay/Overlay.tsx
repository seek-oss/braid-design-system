import React from 'react';
import { Box, BoxProps } from '../../Box/Box';
import { hideFocusRingsClassName } from '../hideFocusRings/hideFocusRings';

export interface OverlayProps
  extends Partial<
    Pick<
      BoxProps,
      | 'component'
      | 'children'
      | 'zIndex'
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
  component,
  zIndex,
  background,
  borderRadius,
  boxShadow,
  transition,
  visible = false,
  onlyVisibleForKeyboardNavigation = false,
  className,
  children,
}: OverlayProps) => (
  <Box
    component={component}
    position="absolute"
    zIndex={zIndex}
    pointerEvents="none"
    background={background}
    borderRadius={borderRadius}
    boxShadow={boxShadow}
    transition={transition}
    inset={0}
    opacity={!visible ? 0 : undefined}
    className={[
      onlyVisibleForKeyboardNavigation ? hideFocusRingsClassName : null,
      className,
    ]}
  >
    {children}
  </Box>
);
