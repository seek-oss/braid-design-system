import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconZoomInSvg } from './IconZoomInSvg';

export type IconZoomInProps = UseIconProps;

export const IconZoomIn = (props: IconZoomInProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconZoomInSvg} {...iconProps} />;
};
