import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconHashSvg } from './IconHashSvg';

export type IconHashProps = IconContainerProps;

export const IconHash = (props: IconHashProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconHashSvg} {...svgProps} />}
  </IconContainer>
);
