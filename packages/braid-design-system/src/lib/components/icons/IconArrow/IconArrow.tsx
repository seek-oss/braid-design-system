import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconArrowSvg } from './IconArrowSvg';

import * as styles from './IconArrow.css';

export type IconArrowProps = IconContainerProps & {
  direction?: 'up' | 'down' | 'left' | 'right';
};

export const IconArrow: FC<IconArrowProps> = ({
  direction = 'up',
  ...props
}) => (
  <IconContainer {...props}>
    {({ className, ...svgProps }) => (
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
        {...svgProps}
      />
    )}
  </IconContainer>
);
