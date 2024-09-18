import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconCareerSvg } from './IconCareerSvg';
import { IconCareerActiveSvg } from './IconCareerActiveSvg';

export type IconCareerProps = IconContainerProps & {
  active?: boolean;
};

export const IconCareer = ({ active = false, ...props }: IconCareerProps) => (
  <IconContainer {...props}>
    {(boxProps) => (
      <Box
        component={active ? IconCareerActiveSvg : IconCareerSvg}
        {...boxProps}
      />
    )}
  </IconContainer>
);
