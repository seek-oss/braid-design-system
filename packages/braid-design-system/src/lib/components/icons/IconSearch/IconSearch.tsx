import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconSearchSvg } from './IconSearchSvg';

export type IconSearchProps = IconContainerProps;

export const IconSearch = (props: IconSearchProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconSearchSvg} {...svgProps} />}
  </IconContainer>
);
