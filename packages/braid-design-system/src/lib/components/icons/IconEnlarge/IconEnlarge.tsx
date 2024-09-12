import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconEnlargeSvg } from './IconEnlargeSvg';
import { IconEnlargeActiveSvg } from './IconEnlargeActiveSvg';

export type IconEnlargeProps = UseIconProps & {
  active?: boolean;
};

export const IconEnlarge = ({ active = false, ...props }: IconEnlargeProps) => {
  const { isInline, boxProps: iconProps } = useIcon(props);

  const iconElement = (
    <Box
      component={active ? IconEnlargeActiveSvg : IconEnlargeSvg}
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
