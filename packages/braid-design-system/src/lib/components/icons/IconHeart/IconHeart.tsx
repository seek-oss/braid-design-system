import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconHeartSvg } from './IconHeartSvg';
import { IconHeartActiveSvg } from './IconHeartActiveSvg';

export type IconHeartProps = UseIconProps & {
  active?: boolean;
};

export const IconHeart = ({ active = false, ...props }: IconHeartProps) => {
  const { isInline, boxProps: iconProps } = useIcon(props);

  const iconElement = (
    <Box
      component={active ? IconHeartActiveSvg : IconHeartSvg}
      {...iconProps}
    />
  );

  return isInline ? (
    <Box component="span" display="inlineBlock">
      {iconElement}
    </Box>
  ) : (
    iconElement
  );
};
