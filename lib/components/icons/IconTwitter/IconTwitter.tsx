import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconTwitterSvg } from './IconTwitterSvg';

export type IconTwitterProps = UseIconProps;

export const IconTwitter = (props: IconTwitterProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconTwitterSvg} {...iconProps} />;
};
