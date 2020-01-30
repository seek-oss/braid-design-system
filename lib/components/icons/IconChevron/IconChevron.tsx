import React from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconChevronSvg } from './IconChevronSvg';
import * as styleRefs from './IconChevron.treat';

export type IconChevronProps = UseIconProps & {
  direction?: 'up' | 'down' | 'left' | 'right';
};

export const IconChevron = ({
  direction = 'down',
  ...props
}: IconChevronProps) => {
  const styles = useStyles(styleRefs);
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
