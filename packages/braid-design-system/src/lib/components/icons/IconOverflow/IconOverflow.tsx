import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconOverflowSvg } from './IconOverflowSvg';

export type IconOverflowProps = IconContainerProps;

export const IconOverflow = (props: IconOverflowProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconOverflowSvg} {...boxProps} />}
  </IconContainer>
);
