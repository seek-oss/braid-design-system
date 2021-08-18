import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconTagSvg } from './IconTagSvg';

export type IconTagProps = UseIconProps;

export const IconTag = (props: IconTagProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconTagSvg} {...iconProps} />;
};
