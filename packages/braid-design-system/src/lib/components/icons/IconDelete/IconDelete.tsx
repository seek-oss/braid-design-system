import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconDeleteSvg } from './IconDeleteSvg';

export type IconDeleteProps = IconContainerProps;

export const IconDelete = (props: IconDeleteProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconDeleteSvg} {...svgProps} />}
  </IconContainer>
);
