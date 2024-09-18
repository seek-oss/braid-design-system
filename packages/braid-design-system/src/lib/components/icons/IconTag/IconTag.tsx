import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconTagSvg } from './IconTagSvg';

export type IconTagProps = IconContainerProps;

export const IconTag = (props: IconTagProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconTagSvg} {...boxProps} />}
  </IconContainer>
);
