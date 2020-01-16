import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconGridSvg } from './IconGridSvg';

export type IconGridProps = UseIconProps;

export const IconGrid = (props: IconGridProps) => {
  const iconProps = useIcon(props);

  return <IconGridSvg {...iconProps} />;
};
