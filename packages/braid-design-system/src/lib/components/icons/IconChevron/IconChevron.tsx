import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconChevronSvg } from './IconChevronSvg';
import * as styles from './IconChevron.css';

export type IconChevronProps = UseIconProps & {
  direction?: 'up' | 'down' | 'left' | 'right';
};

export const IconChevron = ({
  direction = 'down',
  ...props
}: IconChevronProps) => {
  const {
    isInline,
    boxProps: { className, ...iconProps },
  } = useIcon(props);

  const iconElement = (
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

  return isInline ? (
    <Box component="span" display="inlineBlock">
      {iconElement}
    </Box>
  ) : (
    iconElement
  );
};
