import React from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconStarActiveSvg } from './IconStarActiveSvg';
import { IconStarSvg } from './IconStarSvg';

export type IconStarProps = IconContainerProps & {
  active?: boolean;
};

export const IconStar = ({ active = false, ...props }: IconStarProps) => (
  <IconContainer {...props}>
    {(svgProps) => (
      <Box component={active ? IconStarActiveSvg : IconStarSvg} {...svgProps} />
    )}
  </IconContainer>
);
