import React, { Component } from 'react';
import Icon, { IconProps } from '../Icon/Icon';
import ErrorSvg from './ErrorSvg';

export default class ErrorIcon extends Component<IconProps> {
  static displayName = 'ErrorIcon';

  render() {
    return <Icon svgComponent={ErrorSvg} {...this.props} />;
  }
}
