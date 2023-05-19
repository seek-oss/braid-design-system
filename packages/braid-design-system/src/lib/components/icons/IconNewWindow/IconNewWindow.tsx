import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconNewWindowSvg } from './IconNewWindowSvg';

export type IconNewWindowProps = UseIconProps;

export const IconNewWindow = (props: IconNewWindowProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconNewWindowSvg} {...iconProps} />;
};
