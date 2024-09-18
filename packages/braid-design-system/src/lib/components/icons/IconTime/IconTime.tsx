import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconTimeSvg } from './IconTimeSvg';

export type IconTimeProps = IconContainerProps;

export const IconTime = (props: IconTimeProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconTimeSvg} {...boxProps} />}
  </IconContainer>
);
