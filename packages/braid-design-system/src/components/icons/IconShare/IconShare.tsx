import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconShareSvg } from './IconShareSvg';

export type IconShareProps = UseIconProps;

export const IconShare = (props: IconShareProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconShareSvg} {...iconProps} />;
};
