import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconPlatformAndroidSvg } from './IconPlatformAndroidSvg';

export type IconPlatformAndroidProps = UseIconProps;

export const IconPlatformAndroid = (props: IconPlatformAndroidProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconPlatformAndroidSvg} {...iconProps} />;
};
