import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconChevronSvg } from './IconChevronSvg';

import * as styles from './IconChevron.css';

export type IconChevronProps = IconContainerProps & {
  direction?: 'up' | 'down' | 'left' | 'right';
};

export const IconChevron: FC<IconChevronProps> = ({
  direction = 'down',
  ...props
}) => (
  <IconContainer {...props}>
    {({ className, ...svgProps }) => (
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
        {...svgProps}
      />
    )}
  </IconContainer>
);
