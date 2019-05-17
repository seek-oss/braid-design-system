import React from 'react';
import { Overlay, OverlayProps } from '../Overlay/Overlay';
import { BoxShadow } from '../../../themes/theme';

type FieldOverlayVariant = 'focus' | 'hover' | 'critical';
export interface FieldOverlayProps
  extends Pick<OverlayProps, 'backgroundColor' | 'borderRadius' | 'className'> {
  variant?: FieldOverlayVariant;
}

const boxShadowForVariant: Record<FieldOverlayVariant, BoxShadow> = {
  focus: 'outlineFocus',
  hover: 'borderFormAccent',
  critical: 'borderCritical',
};

export const FieldOverlay = ({ variant, ...restProps }: FieldOverlayProps) => (
  <Overlay
    borderRadius="standard"
    boxShadow={boxShadowForVariant[variant!]}
    transition="fast"
    {...restProps}
  />
);
