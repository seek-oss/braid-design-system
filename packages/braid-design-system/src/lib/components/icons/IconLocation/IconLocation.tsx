import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconLocationSvg } from './IconLocationSvg';

export type IconLocationProps = IconContainerProps;

export const IconLocation = (props: IconLocationProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconLocationSvg} {...boxProps} />}
  </IconContainer>
);
