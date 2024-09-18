import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconSentSvg } from './IconSentSvg';

export type IconSentProps = IconContainerProps;

export const IconSent = (props: IconSentProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconSentSvg} {...boxProps} />}
  </IconContainer>
);
