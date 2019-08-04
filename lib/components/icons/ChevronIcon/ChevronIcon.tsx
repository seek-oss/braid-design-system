import React from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { ChevronSvg } from './ChevronSvg';
import * as styleRefs from './ChevronIcon.treat';

export interface ChevronIconProps extends UseIconProps {
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const ChevronIcon = ({
  direction = 'down',
  ...props
}: ChevronIconProps) => {
  const styles = useStyles(styleRefs);
  const { className, ...iconProps } = useIcon(props);

  return (
    <Box
      component={ChevronSvg}
      className={classnames(styles.root, className, {
        [styles.up]: direction === 'up',
        [styles.left]: direction === 'left',
        [styles.right]: direction === 'right',
      })}
      {...iconProps}
    />
  );
};
