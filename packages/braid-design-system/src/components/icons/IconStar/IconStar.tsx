import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconStarSvg } from './IconStarSvg';
import { IconStarActiveSvg } from './IconStarActiveSvg';

export type IconStarProps = UseIconProps & {
  active?: boolean;
};

export const IconStar = ({ active = false, ...props }: IconStarProps) => {
  const iconProps = useIcon(props);

  return (
    <Box component={active ? IconStarActiveSvg : IconStarSvg} {...iconProps} />
  );
};
