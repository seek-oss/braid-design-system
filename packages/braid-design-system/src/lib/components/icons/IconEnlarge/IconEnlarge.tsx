import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconEnlargeSvg } from './IconEnlargeSvg';
import { IconEnlargeActiveSvg } from './IconEnlargeActiveSvg';

export type IconEnlargeProps = IconContainerProps & {
  active?: boolean;
};

export const IconEnlarge = ({ active = false, ...props }: IconEnlargeProps) => (
  <IconContainer {...props}>
    {(boxProps) => (
      <Box
        component={active ? IconEnlargeActiveSvg : IconEnlargeSvg}
        {...boxProps}
      />
    )}
  </IconContainer>
);
