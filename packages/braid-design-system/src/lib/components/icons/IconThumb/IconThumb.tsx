import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconThumbSvg } from './IconThumbSvg';
import * as styles from './IconThumb.css';

export type IconThumbProps = UseIconProps & {
  direction?: 'up' | 'down';
};

export const IconThumb = ({ direction = 'up', ...props }: IconThumbProps) => {
  const {
    isInline,
    boxProps: { className, ...iconProps },
  } = useIcon(props);

  const iconElement = (
    <Box
      component={IconThumbSvg}
      className={[
        styles.root,
        className,
        {
          [styles.down]: direction === 'down',
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
