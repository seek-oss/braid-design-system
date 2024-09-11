import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconEnlargeSvg } from './IconEnlargeSvg';
import { IconEnlargeActiveSvg } from './IconEnlargeActiveSvg';

export type IconEnlargeProps = UseIconProps & {
  active?: boolean;
};

export const IconEnlarge = ({ active = false, ...props }: IconEnlargeProps) => {
  const iconProps = useIcon(props);

  return (
    <Box
      component={active ? IconEnlargeActiveSvg : IconEnlargeSvg}
      {...iconProps}
    />
  );
};
