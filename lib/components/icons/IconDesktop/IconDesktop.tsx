import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconDesktopSvg } from './IconDesktopSvg';

export type IconDesktopProps = UseIconProps;

export const IconDesktop = (props: IconDesktopProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconDesktopSvg} {...iconProps} />;
};
