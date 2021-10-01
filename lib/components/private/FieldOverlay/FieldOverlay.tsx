import React from 'react';
import { Overlay, OverlayProps } from '../Overlay/Overlay';

type FieldOverlayVariant =
  | 'default'
  | 'disabled'
  | 'focus'
  | 'hover'
  | 'transparent'
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
  transparent: 'none',
  default: 'borderField',
  disabled: { lightMode: 'borderNeutralLight', darkMode: 'none' },
  focus: 'outlineFocus',
  hover: { lightMode: 'borderFormAccent', darkMode: 'borderFormAccentLight' },
  critical: { lightMode: 'borderCritical', darkMode: 'borderCriticalLight' },
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
