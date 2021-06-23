import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconImageSvg } from './IconImageSvg';

export type IconImageProps = UseIconProps;

export const IconImage = (props: IconImageProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconImageSvg} {...iconProps} />;
};
