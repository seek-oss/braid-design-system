import React, { Component } from 'react';
import Icon, { IconProps } from '../Icon/Icon';
import TickCircleSvg from './TickCircleSvg';

export default class TickCircleIcon extends Component<IconProps> {
  static displayName = 'TickCircleIcon';

  render() {
    return <Icon svgComponent={TickCircleSvg} {...this.props} />;
  }
}
