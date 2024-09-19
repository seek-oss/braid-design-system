import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconZoomOutSvg } from './IconZoomOutSvg';

export type IconZoomOutProps = IconContainerProps;

export const IconZoomOut = (props: IconZoomOutProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconZoomOutSvg} {...svgProps} />}
  </IconContainer>
);
