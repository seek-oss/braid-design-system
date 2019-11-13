import React from 'react';
import { Overlay, OverlayProps } from '../Overlay/Overlay';

type FieldOverlayVariant = 'default' | 'focus' | 'hover' | 'critical';
export interface FieldOverlayProps
  extends Pick<
    OverlayProps,
    'children' | 'visible' | 'background' | 'borderRadius' | 'className'
  > {
  variant?: FieldOverlayVariant;
}

const boxShadowForVariant: Record<
  FieldOverlayVariant,
  OverlayProps['boxShadow']
> = {
  default: 'borderStandard',
  focus: 'outlineFocus',
  hover: 'borderFormHover',
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
