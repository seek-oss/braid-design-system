import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconTickSvg } from './IconTickSvg';

export type IconTickProps = IconContainerProps;

export const IconTick = (props: IconTickProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconTickSvg} {...boxProps} />}
  </IconContainer>
);
