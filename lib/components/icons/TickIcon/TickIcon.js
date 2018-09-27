import React from 'react';
import Icon from '../Icon/Icon';
import TickSvg from './TickSvg';

export default class TickIcon extends React.Component {
  static displayName = 'TickIcon';

  render() {
    return <Icon svgComponent={TickSvg} {...this.props} />;
  }
}
