import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconThumbSvg } from './IconThumbSvg';

import * as styles from './IconThumb.css';

export type IconThumbProps = IconContainerProps & {
  direction?: 'up' | 'down';
};

export const IconThumb: FC<IconThumbProps> = ({
  direction = 'up',
  ...props
}) => (
  <IconContainer {...props}>
    {({ className, ...svgProps }) => (
      <Box
        component={IconThumbSvg}
        className={[
          styles.root,
          className,
          {
            [styles.down]: direction === 'down',
          },
        ]}
        {...svgProps}
      />
    )}
  </IconContainer>
);
