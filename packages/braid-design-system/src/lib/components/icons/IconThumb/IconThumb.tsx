import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconThumbSvg } from './IconThumbSvg';
import * as styles from './IconThumb.css';

export type IconThumbProps = IconContainerProps & {
  direction?: 'up' | 'down';
};

export const IconThumb = ({ direction = 'up', ...props }: IconThumbProps) => (
  <IconContainer {...props}>
    {({ className, ...iconProps }) => (
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
    )}
  </IconContainer>
);
