import React from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
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
    <IconChevronSvg
      className={classnames(styles.root, className, {
        [styles.up]: direction === 'up',
        [styles.left]: direction === 'left',
        [styles.right]: direction === 'right',
      })}
      {...iconProps}
    />
  );
};
