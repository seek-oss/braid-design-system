import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconHeartSvg } from './IconHeartSvg';
import { IconHeartActiveSvg } from './IconHeartActiveSvg';

export type IconHeartProps = IconContainerProps & {
  active?: boolean;
};

export const IconHeart = ({ active = false, ...props }: IconHeartProps) => (
  <IconContainer {...props}>
    {(boxProps) => (
      <Box
        component={active ? IconHeartActiveSvg : IconHeartSvg}
        {...boxProps}
      />
    )}
  </IconContainer>
);
