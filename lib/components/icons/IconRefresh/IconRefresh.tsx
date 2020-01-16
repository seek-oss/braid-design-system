import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconRefreshSvg } from './IconRefreshSvg';

export type IconRefreshProps = UseIconProps;

export const IconRefresh = (props: IconRefreshProps) => {
  const iconProps = useIcon(props);

  return <IconRefreshSvg {...iconProps} />;
};
