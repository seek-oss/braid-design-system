import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconZoomOutSvg } from './IconZoomOutSvg';

export type IconZoomOutProps = UseIconProps;

export const IconZoomOut = (props: IconZoomOutProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconZoomOutSvg} {...iconProps} />;
};
