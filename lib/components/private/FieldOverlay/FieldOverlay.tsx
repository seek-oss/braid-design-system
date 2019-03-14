import React, { Component } from 'react';
import Overlay, { OverlayProps } from '../Overlay/Overlay';

export interface FieldOverlayProps
  extends Pick<OverlayProps, 'backgroundColor' | 'className'> {
  variant?: 'focus';
}

export default class FieldOverlay extends Component<FieldOverlayProps> {
  static displayName = 'FieldOverlay';

  render() {
    const { variant, ...restProps } = this.props;

    return (
      <Overlay
        borderRadius="standard"
        boxShadow={variant === 'focus' ? 'outlineFocus' : undefined}
        transition="fast"
        {...restProps}
      />
    );
  }
}
