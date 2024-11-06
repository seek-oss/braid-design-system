import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconPlatformAndroidSvg } from './IconPlatformAndroidSvg';

export type IconPlatformAndroidProps = IconContainerProps;

export const IconPlatformAndroid = (props: IconPlatformAndroidProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconPlatformAndroidSvg} {...svgProps} />}
  </IconContainer>
);
