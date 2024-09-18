import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconComposeSvg } from './IconComposeSvg';

export type IconComposeProps = IconContainerProps;

export const IconCompose = (props: IconComposeProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconComposeSvg} {...boxProps} />}
  </IconContainer>
);
