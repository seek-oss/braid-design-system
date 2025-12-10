import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconHeartActiveSvg } from './IconHeartActiveSvg';
import { IconHeartSvg } from './IconHeartSvg';

export type IconHeartProps = IconContainerProps & {
  active?: boolean;
};

export const IconHeart: FC<IconHeartProps> = ({ active = false, ...props }) => (
  <IconContainer {...props}>
    {(svgProps) => (
      <Box
        component={active ? IconHeartActiveSvg : IconHeartSvg}
        {...svgProps}
      />
    )}
  </IconContainer>
);
