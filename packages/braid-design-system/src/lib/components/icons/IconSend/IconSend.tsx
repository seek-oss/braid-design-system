import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconSendSvg } from './IconSendSvg';

export type IconSendProps = IconContainerProps;

export const IconSend = (props: IconSendProps) => (
  <IconContainer
    {...props}
    verticalCorrection={{
      uppercase: 'none',
      lowercase: 'up',
    }}
  >
    {(boxProps) => <Box component={IconSendSvg} {...boxProps} />}
  </IconContainer>
);
