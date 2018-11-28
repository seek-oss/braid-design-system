import React, { Component } from 'react';
import Icon, { IconProps } from '../Icon/Icon';
import TickSvg from './TickSvg';

export default class TickIcon extends Component<IconProps> {
  static displayName = 'TickIcon';

  render() {
    return <Icon svgComponent={TickSvg} {...this.props} />;
  }
}
