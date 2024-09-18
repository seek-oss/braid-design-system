import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconClearSvg } from './IconClearSvg';

export type IconClearProps = IconContainerProps;

export const IconClear = (props: IconClearProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconClearSvg} {...boxProps} />}
  </IconContainer>
);
