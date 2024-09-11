import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconCareerSvg } from './IconCareerSvg';
import { IconCareerActiveSvg } from './IconCareerActiveSvg';

export type IconCareerProps = UseIconProps & {
  active?: boolean;
};

export const IconCareer = ({ active = false, ...props }: IconCareerProps) => {
  const iconProps = useIcon(props);

  return (
    <Box
      component={active ? IconCareerActiveSvg : IconCareerSvg}
      {...iconProps}
    />
  );
};
