import React, { Component } from 'react';
import classnames from 'classnames';
import Box from '../../Box/Box';
import Icon, { IconProps } from '../Icon/Icon';
import ChevronSvg from './ChevronSvg';
import styles from './ChevronIcon.css.js';

export interface ChevronIconProps
  extends Pick<IconProps, 'svgComponent' | 'inline'> {
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default class ChevronIcon extends Component<ChevronIconProps> {
  static displayName = 'ChevronIcon';

  render() {
    const { direction = 'down', inline } = this.props;

    return (
      <Box
        className={classnames(styles.root, {
          [styles.inline]: inline,
          [styles.up]: direction === 'up',
          [styles.left]: direction === 'left',
          [styles.right]: direction === 'right'
        })}
      >
        <Icon svgComponent={ChevronSvg} inline={inline} />
      </Box>
    );
  }
}
