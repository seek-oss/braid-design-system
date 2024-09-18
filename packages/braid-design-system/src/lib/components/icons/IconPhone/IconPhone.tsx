import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconPhoneSvg } from './IconPhoneSvg';

export type IconPhoneProps = IconContainerProps;

export const IconPhone = (props: IconPhoneProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconPhoneSvg} {...boxProps} />}
  </IconContainer>
);
