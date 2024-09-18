import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconCriticalSvg } from './IconCriticalSvg';

export type IconCriticalProps = IconContainerProps;

export const IconCritical = (props: IconCriticalProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconCriticalSvg} {...boxProps} />}
  </IconContainer>
);
