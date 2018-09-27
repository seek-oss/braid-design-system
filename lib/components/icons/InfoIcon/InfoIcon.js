import React from 'react';
import Icon from '../Icon/Icon';
import InfoSvg from './InfoSvg';

export default class InfoIcon extends React.Component {
  static displayName = 'InfoIcon';

  render() {
    return <Icon svgComponent={InfoSvg} {...this.props} />;
  }
}
