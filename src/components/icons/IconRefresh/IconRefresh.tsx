import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconRefreshSvg } from './IconRefreshSvg';

export type IconRefreshProps = UseIconProps;

export const IconRefresh = (props: IconRefreshProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconRefreshSvg} {...iconProps} />;
};
