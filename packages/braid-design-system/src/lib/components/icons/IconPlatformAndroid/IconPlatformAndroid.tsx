import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconPlatformAndroidSvg } from './IconPlatformAndroidSvg';

export type IconPlatformAndroidProps = UseIconProps;

export const IconPlatformAndroid = (props: IconPlatformAndroidProps) => {
  const { isInline, boxProps: iconProps } = useIcon(props);

  const iconElement = <Box component={IconPlatformAndroidSvg} {...iconProps} />;

  return isInline ? (
    <Box component="span" display="inlineBlock">
      {iconElement}
    </Box>
  ) : (
    iconElement
  );
};
