import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconLocationSvg } from './IconLocationSvg';

export type IconLocationProps = UseIconProps;

export const IconLocation = (props: IconLocationProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconLocationSvg} {...iconProps} />;
};
