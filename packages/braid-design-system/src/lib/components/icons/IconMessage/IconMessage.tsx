import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconMessageSvg } from './IconMessageSvg';

export type IconMessageProps = IconContainerProps;

export const IconMessage = (props: IconMessageProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconMessageSvg} {...boxProps} />}
  </IconContainer>
);
