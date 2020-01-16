import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconCriticalSvg } from './IconCriticalSvg';

export type IconCriticalProps = UseIconProps;

export const IconCritical = (props: IconCriticalProps) => {
  const iconProps = useIcon(props);

  return <IconCriticalSvg {...iconProps} />;
};
