import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconRecommendedSvg } from './IconRecommendedSvg';

export type IconRecommendedProps = IconContainerProps;

export const IconRecommended = (props: IconRecommendedProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconRecommendedSvg} {...svgProps} />}
  </IconContainer>
);
