import React from 'react';
import classnames from 'classnames';
import { Omit } from 'utility-types';
import { Box } from '../../Box/Box';
import { Icon, IconProps } from '../Icon/Icon';
import { ChevronSvg } from './ChevronSvg';
import styles from './ChevronIcon.css.js';

export interface ChevronIconProps extends Omit<IconProps, 'svgComponent'> {
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const ChevronIcon = ({
  direction = 'down',
  inline,
  ...restProps
}: ChevronIconProps) => (
  <Box
    className={classnames(styles.root, {
      [styles.inline]: inline,
      [styles.up]: direction === 'up',
      [styles.left]: direction === 'left',
      [styles.right]: direction === 'right',
    })}
  >
    <Icon svgComponent={ChevronSvg} inline={inline} {...restProps} />
  </Box>
);
