import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconNewWindowSvg } from './IconNewWindowSvg';

export type IconNewWindowProps = UseIconProps;

export const IconNewWindow = (props: IconNewWindowProps) => {
  const iconProps = useIcon(props);

  return <IconNewWindowSvg {...iconProps} />;
};
