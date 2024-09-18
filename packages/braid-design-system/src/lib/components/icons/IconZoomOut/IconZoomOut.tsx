import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconZoomOutSvg } from './IconZoomOutSvg';

export type IconZoomOutProps = IconContainerProps;

export const IconZoomOut = (props: IconZoomOutProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconZoomOutSvg} {...boxProps} />}
  </IconContainer>
);
