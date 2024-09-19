import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconVideoSvg } from './IconVideoSvg';

export type IconVideoProps = IconContainerProps;

export const IconVideo = (props: IconVideoProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconVideoSvg} {...svgProps} />}
  </IconContainer>
);
