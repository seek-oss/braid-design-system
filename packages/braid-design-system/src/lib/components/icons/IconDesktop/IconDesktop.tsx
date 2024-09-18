import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconDesktopSvg } from './IconDesktopSvg';

export type IconDesktopProps = IconContainerProps;

export const IconDesktop = (props: IconDesktopProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconDesktopSvg} {...boxProps} />}
  </IconContainer>
);
