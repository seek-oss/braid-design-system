import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconProfileSvg } from './IconProfileSvg';

export type IconProfileProps = IconContainerProps;

export const IconProfile = (props: IconProfileProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconProfileSvg} {...boxProps} />}
  </IconContainer>
);
