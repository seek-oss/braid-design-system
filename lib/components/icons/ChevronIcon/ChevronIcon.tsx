import React from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { Omit } from 'utility-types';
import { Box } from '../../Box/Box';
import { Icon, IconProps } from '../Icon/Icon';
import { ChevronSvg } from './ChevronSvg';
import * as styleRefs from './ChevronIcon.treat';

export interface ChevronIconProps extends Omit<IconProps, 'svgComponent'> {
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const ChevronIcon = ({
  direction = 'down',
  inline,
  ...restProps
}: ChevronIconProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      display={inline ? 'inlineBlock' : undefined}
      className={classnames(styles.root, {
        [styles.up]: direction === 'up',
        [styles.left]: direction === 'left',
        [styles.right]: direction === 'right',
      })}
    >
      <Icon svgComponent={ChevronSvg} inline={inline} {...restProps} />
    </Box>
  );
};
