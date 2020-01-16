import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconHeartSvg } from './IconHeartSvg';
import { IconHeartActiveSvg } from './IconHeartActiveSvg';

export type IconHeartProps = UseIconProps & {
  active?: boolean;
};

export const IconHeart = ({ active = false, ...props }: IconHeartProps) => {
  const iconProps = useIcon(props);

  return active ? (
    <IconHeartActiveSvg {...iconProps} />
  ) : (
    <IconHeartSvg {...iconProps} />
  );
};
