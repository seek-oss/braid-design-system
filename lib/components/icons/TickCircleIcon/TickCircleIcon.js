import React from 'react';
import Icon from '../Icon/Icon';
import TickCircleSvg from './TickCircleSvg';

export default class TickCircleIcon extends React.Component {
  static displayName = 'TickCircleIcon';

  render() {
    return <Icon svgComponent={TickCircleSvg} {...this.props} />;
  }
}
