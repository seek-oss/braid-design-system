import React, { Component } from 'react';
import classnames from 'classnames';
import { Omit } from 'utility-types';
import Icon, { IconProps } from '../Icon/Icon';
import ChevronSvg from './ChevronSvg';
import styles from './ChevronIcon.css.js';

export interface ChevronIconProps extends Omit<IconProps, 'svgComponent'> {
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default class ChevronIcon extends Component<ChevronIconProps> {
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
