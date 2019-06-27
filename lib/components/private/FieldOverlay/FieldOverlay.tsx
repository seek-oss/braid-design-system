import React from 'react';
import { Overlay, OverlayProps } from '../Overlay/Overlay';

type FieldOverlayVariant = 'focus' | 'hover' | 'critical';
export interface FieldOverlayProps
  extends Pick<OverlayProps, 'background' | 'borderRadius' | 'className'> {
  variant?: FieldOverlayVariant;
}

const boxShadowForVariant: Record<
  FieldOverlayVariant,
  OverlayProps['boxShadow']
> = {
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
