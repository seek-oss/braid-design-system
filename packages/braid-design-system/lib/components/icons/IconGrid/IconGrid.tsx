import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconGridSvg } from './IconGridSvg';

export type IconGridProps = UseIconProps;

export const IconGrid = (props: IconGridProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconGridSvg} {...iconProps} />;
};
