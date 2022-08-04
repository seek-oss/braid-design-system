import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconCriticalSvg } from './IconCriticalSvg';

export type IconCriticalProps = UseIconProps;

export const IconCritical = (props: IconCriticalProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconCriticalSvg} {...iconProps} />;
};
