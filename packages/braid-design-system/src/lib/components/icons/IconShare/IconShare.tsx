import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconShareSvg } from './IconShareSvg';

export type IconShareProps = IconContainerProps;

export const IconShare = (props: IconShareProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconShareSvg} {...boxProps} />}
  </IconContainer>
);
