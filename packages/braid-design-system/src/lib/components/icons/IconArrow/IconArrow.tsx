import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconArrowSvg } from './IconArrowSvg';
import * as styles from './IconArrow.css';

export type IconArrowProps = UseIconProps & {
  direction?: 'up' | 'down' | 'left' | 'right';
};

export const IconArrow = ({ direction = 'up', ...props }: IconArrowProps) => {
  const {
    isInline,
    boxProps: { className, ...iconProps },
  } = useIcon(props);

  const iconElement = (
    <Box
      component={IconArrowSvg}
      className={[
        styles.root,
        className,
        {
          [styles.rotate]: direction === 'right' || direction === 'left',
          [styles.flip]: direction === 'down',
          [styles.mirror]: direction === 'left',
        },
      ]}
      {...iconProps}
    />
  );

  return isInline ? (
    <Box component="span" display="inlineBlock">
      {iconElement}
    </Box>
  ) : (
    iconElement
  );
};
