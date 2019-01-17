import React, { Component } from 'react';
import { Omit } from 'utility-types';
import Icon, { IconProps } from '../Icon/Icon';
import TickCircleSvg from './TickCircleSvg';

export type TickCircleIconProps = Omit<IconProps, 'svgComponent'>;

export default class TickCircleIcon extends Component<TickCircleIconProps> {
  static displayName = 'TickCircleIcon';

  render() {
    return <Icon svgComponent={TickCircleSvg} {...this.props} />;
  }
}
