import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconAddSvg } from './IconAddSvg';

export type IconAddProps = IconContainerProps;

export const IconAdd = (props: IconAddProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconAddSvg} {...boxProps} />}
  </IconContainer>
);
