import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconThumbSvg } from './IconThumbSvg';
import * as styles from './IconThumb.css';

export type IconThumbProps = UseIconProps & {
  direction?: 'up' | 'down';
};

export const IconThumb = ({ direction = 'up', ...props }: IconThumbProps) => {
  const { className, ...iconProps } = useIcon(props);

  return (
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
};
