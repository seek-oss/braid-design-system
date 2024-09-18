import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconHomeSvg } from './IconHomeSvg';

export type IconHomeProps = IconContainerProps;

export const IconHome = (props: IconHomeProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconHomeSvg} {...svgProps} />}
  </IconContainer>
);
