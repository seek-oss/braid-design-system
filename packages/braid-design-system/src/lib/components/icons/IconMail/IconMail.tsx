import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconMailSvg } from './IconMailSvg';

export type IconMailProps = IconContainerProps;

export const IconMail = (props: IconMailProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconMailSvg} {...boxProps} />}
  </IconContainer>
);
