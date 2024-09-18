import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconNewWindowSvg } from './IconNewWindowSvg';

export type IconNewWindowProps = IconContainerProps;

export const IconNewWindow = (props: IconNewWindowProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconNewWindowSvg} {...boxProps} />}
  </IconContainer>
);
