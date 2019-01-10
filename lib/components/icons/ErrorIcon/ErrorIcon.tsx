import React, { Component } from 'react';
import { Omit } from 'utility-types';
import Icon, { IconProps } from '../Icon/Icon';
import ErrorSvg from './ErrorSvg';

export type ErrorIconProps = Omit<IconProps, 'svgComponent'>;

export default class ErrorIcon extends Component<ErrorIconProps> {
  static displayName = 'ErrorIcon';

  render() {
    return <Icon svgComponent={ErrorSvg} {...this.props} />;
  }
}
