import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconStarSvg } from './IconStarSvg';
import { IconStarActiveSvg } from './IconStarActiveSvg';

export type IconStarProps = IconContainerProps & {
  active?: boolean;
};

export const IconStar = ({ active = false, ...props }: IconStarProps) => (
  <IconContainer {...props}>
    {(boxProps) => (
      <Box component={active ? IconStarActiveSvg : IconStarSvg} {...boxProps} />
    )}
  </IconContainer>
);
