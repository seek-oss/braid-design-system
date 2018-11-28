import React, { Component } from 'react';
import Icon from '../Icon/Icon';
import InfoSvg from './InfoSvg';

export default class InfoIcon extends Component {
  static displayName = 'InfoIcon';

  render() {
    return <Icon svgComponent={InfoSvg} {...this.props} />;
  }
}
