import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconGridSvg } from './IconGridSvg';

export type IconGridProps = UseIconProps;

export const IconGrid = (props: IconGridProps) => {
  const { isInline, boxProps: iconProps } = useIcon(props);

  const iconElement = <Box component={IconGridSvg} {...iconProps} />;

  return isInline ? (
    <Box component="span" display="inlineBlock">
      {iconElement}
    </Box>
  ) : (
    iconElement
  );
};
