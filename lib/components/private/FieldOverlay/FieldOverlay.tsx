import React from 'react';
import { Overlay, OverlayProps } from '../Overlay/Overlay';

export interface FieldOverlayProps
  extends Pick<OverlayProps, 'backgroundColor' | 'className'> {
  variant?: 'focus';
}

export const FieldOverlay = ({ variant, ...restProps }: FieldOverlayProps) => (
  <Overlay
    borderRadius="standard"
    boxShadow={variant === 'focus' ? 'outlineFocus' : undefined}
    transition="fast"
    {...restProps}
  />
);
