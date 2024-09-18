import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconPlatformAndroidSvg } from './IconPlatformAndroidSvg';

export type IconPlatformAndroidProps = IconContainerProps;

export const IconPlatformAndroid = (props: IconPlatformAndroidProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconPlatformAndroidSvg} {...boxProps} />}
  </IconContainer>
);
