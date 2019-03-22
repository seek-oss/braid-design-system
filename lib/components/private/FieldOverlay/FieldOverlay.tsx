import React from 'react';
import { Overlay, OverlayProps } from '../Overlay/Overlay';
import { BoxShadow } from '../../../themes/theme';

type FieldOverlayVariant = 'focus' | 'hover';
export interface FieldOverlayProps
  extends Pick<OverlayProps, 'backgroundColor' | 'className'> {
  variant?: FieldOverlayVariant;
}

const boxShadowForVariant: Record<FieldOverlayVariant, BoxShadow> = {
  focus: 'outlineFocus',
  hover: 'borderFormAccent',
};

export const FieldOverlay = ({ variant, ...restProps }: FieldOverlayProps) => (
  <Overlay
    borderRadius="standard"
    boxShadow={boxShadowForVariant[variant!]}
    transition="fast"
    {...restProps}
  />
);
