import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconChevronSvg } from './IconChevronSvg';
import * as styles from './IconChevron.css';

export type IconChevronProps = UseIconProps & {
  direction?: 'up' | 'down' | 'left' | 'right';
};

export const IconChevron = ({
  direction = 'down',
  ...props
}: IconChevronProps) => {
  const { className, ...iconProps } = useIcon(props);

  return (
    <Box
      component={IconChevronSvg}
      className={[
        styles.root,
        className,
        {
          [styles.up]: direction === 'up',
          [styles.left]: direction === 'left',
          [styles.right]: direction === 'right',
        },
      ]}
      {...iconProps}
    />
  );
};
