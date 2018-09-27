import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon/Icon';
import ChevronSvg from './ChevronSvg';
import styles from './ChevronIcon.css.js';

export default class ChevronIcon extends React.Component {
  static displayName = 'ChevronIcon';

  static propTypes = {
    direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
    className: PropTypes.string
  };

  static defaultProps = {
    direction: 'down'
  };

  render() {
    const { className, direction, ...props } = this.props;

    const combinedProps = {
      ...props,
      className: classnames({
        [styles.root]: true,
        [styles[direction]]: styles[direction],
        [className]: className
      })
    };

    return <Icon svgComponent={ChevronSvg} {...combinedProps} />;
  }
}
