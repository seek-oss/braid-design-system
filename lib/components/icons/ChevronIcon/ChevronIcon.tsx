import React, { Component } from 'react';
import classnames from 'classnames';
import Icon from '../Icon/Icon';
import ChevronSvg from './ChevronSvg';
import styles from './ChevronIcon.css.js';

interface Props {
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export default class ChevronIcon extends Component<Props> {
  static displayName = 'ChevronIcon';

  render() {
    const { className, direction = 'down', ...restProps } = this.props;

    return (
      <Icon
        svgComponent={ChevronSvg}
        className={classnames(className, styles.root, {
          [styles.up]: direction === 'up',
          [styles.left]: direction === 'left',
          [styles.right]: direction === 'right'
        })}
        {...restProps}
      />
    );
  }
}
