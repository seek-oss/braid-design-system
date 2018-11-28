import React, { Component } from 'react';
import Icon, { IconProps } from '../Icon/Icon';
import InfoSvg from './InfoSvg';

export default class InfoIcon extends Component<IconProps> {
  static displayName = 'InfoIcon';

  render() {
    return <Icon svgComponent={InfoSvg} {...this.props} />;
  }
}
