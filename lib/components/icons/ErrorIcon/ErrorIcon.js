import React from 'react';
import Icon from '../Icon/Icon';
import ErrorSvg from './ErrorSvg';

export default class ErrorIcon extends React.Component {
  static displayName = 'ErrorIcon';

  render() {
    return <Icon svgComponent={ErrorSvg} {...this.props} />;
  }
}
