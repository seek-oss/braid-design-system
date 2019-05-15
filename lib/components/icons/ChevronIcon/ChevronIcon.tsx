import React from 'react';
import { useClassNames } from 'sku/treat';
import { Omit } from 'utility-types';
import { Box } from '../../Box/Box';
import { Icon, IconProps } from '../Icon/Icon';
import { ChevronSvg } from './ChevronSvg';
import * as styles from './ChevronIcon.treat';

export interface ChevronIconProps extends Omit<IconProps, 'svgComponent'> {
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const ChevronIcon = ({
  direction = 'down',
  inline,
  ...restProps
}: ChevronIconProps) => (
  <Box
    display={inline ? 'inlineBlock' : undefined}
    className={useClassNames(styles.root, {
      [styles.up]: direction === 'up',
      [styles.left]: direction === 'left',
      [styles.right]: direction === 'right',
    })}
  >
    <Icon svgComponent={ChevronSvg} inline={inline} {...restProps} />
  </Box>
);
