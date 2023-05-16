import React from 'react';
import { type OverlayProps, Overlay } from '../Overlay/Overlay';

type FieldOverlayVariant =
  | 'default'
  | 'disabled'
  | 'focus'
  | 'formAccent'
  | 'critical';
export interface FieldOverlayProps
  extends Pick<
    OverlayProps,
    | 'children'
    | 'visible'
    | 'onlyVisibleForKeyboardNavigation'
    | 'background'
    | 'borderRadius'
    | 'className'
  > {
  variant?: FieldOverlayVariant;
}

const boxShadowForVariant: Record<
  FieldOverlayVariant,
  OverlayProps['boxShadow']
> = {
  default: 'borderField',
  disabled: 'borderNeutralLight',
  focus: 'outlineFocus',
  formAccent: 'borderFormAccent',
  critical: 'borderCritical',
};

export const FieldOverlay = ({ variant, ...restProps }: FieldOverlayProps) => (
  <Overlay
    component="span"
    borderRadius="standard"
    boxShadow={boxShadowForVariant[variant!]}
    transition="fast"
    {...restProps}
  />
);
