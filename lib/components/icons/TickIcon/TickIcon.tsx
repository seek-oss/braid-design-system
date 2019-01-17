import React, { Component } from 'react';
import { Omit } from 'utility-types';
import Icon, { IconProps } from '../Icon/Icon';
import TickSvg from './TickSvg';

export type TickIconProps = Omit<IconProps, 'svgComponent'>;

export default class TickIcon extends Component<TickIconProps> {
  static displayName = 'TickIcon';

  render() {
    return <Icon svgComponent={TickSvg} {...this.props} />;
  }
}
