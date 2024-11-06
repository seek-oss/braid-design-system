import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconPositiveSvg } from './IconPositiveSvg';

export type IconPositiveProps = IconContainerProps;

export const IconPositive = (props: IconPositiveProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconPositiveSvg} {...svgProps} />}
  </IconContainer>
);
