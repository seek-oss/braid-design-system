import React, { Component } from 'react';
import classnames from 'classnames';
import { Omit } from 'utility-types';
import Box from '../../Box/Box';
import Icon, { IconProps } from '../Icon/Icon';
import ChevronSvg from './ChevronSvg';
import styles from './ChevronIcon.css.js';

export interface ChevronIconProps extends Omit<IconProps, 'svgComponent'> {
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default class ChevronIcon extends Component<ChevronIconProps> {
  static displayName = 'ChevronIcon';

  render() {
    const { direction = 'down' } = this.props;

    return (
      <Box
        className={classnames(styles.root, {
          [styles.up]: direction === 'up',
          [styles.left]: direction === 'left',
          [styles.right]: direction === 'right'
        })}
      >
        <Icon svgComponent={ChevronSvg} />
      </Box>
    );
  }
}
