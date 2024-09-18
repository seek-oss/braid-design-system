import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconPersonVerifiedSvg } from './IconPersonVerifiedSvg';

export type IconPersonVerifiedProps = IconContainerProps;

export const IconPersonVerified = (props: IconPersonVerifiedProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconPersonVerifiedSvg} {...boxProps} />}
  </IconContainer>
);
