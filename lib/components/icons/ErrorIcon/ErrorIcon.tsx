import React, { Component } from 'react';
import Icon from '../Icon/Icon';
import ErrorSvg from './ErrorSvg';

export default class ErrorIcon extends Component {
  static displayName = 'ErrorIcon';

  render() {
    return <Icon svgComponent={ErrorSvg} {...this.props} />;
  }
}
