import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconHeartSvg } from './IconHeartSvg';
import { IconHeartActiveSvg } from './IconHeartActiveSvg';

export type IconHeartProps = UseIconProps & {
  active?: boolean;
};

export const IconHeart = ({ active = false, ...props }: IconHeartProps) => {
  const iconProps = useIcon(props);

  return (
    <Box
      component={active ? IconHeartActiveSvg : IconHeartSvg}
      {...iconProps}
    />
  );
};
