import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconEducationSvg } from './IconEducationSvg';

export type IconEducationProps = IconContainerProps;

export const IconEducation = (props: IconEducationProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconEducationSvg} {...svgProps} />}
  </IconContainer>
);
