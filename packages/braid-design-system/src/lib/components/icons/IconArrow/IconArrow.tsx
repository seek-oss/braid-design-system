import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconArrowSvg } from './IconArrowSvg';
import * as styles from './IconArrow.css';

export type IconArrowProps = IconContainerProps & {
  direction?: 'up' | 'down' | 'left' | 'right';
};

export const IconArrow = ({ direction = 'up', ...props }: IconArrowProps) => (
  <IconContainer {...props}>
    {({ className, ...iconProps }) => (
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
    )}
  </IconContainer>
);
