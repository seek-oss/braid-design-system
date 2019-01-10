import React, { Component } from 'react';
import { Omit } from 'utility-types';
import Icon, { IconProps } from '../Icon/Icon';
import InfoSvg from './InfoSvg';

export type InfoIconProps = Omit<IconProps, 'svgComponent'>;

export default class InfoIcon extends Component<InfoIconProps> {
  static displayName = 'InfoIcon';

  render() {
    return <Icon svgComponent={InfoSvg} {...this.props} />;
  }
}
