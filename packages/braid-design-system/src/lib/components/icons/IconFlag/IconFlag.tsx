import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconFlagSvg } from './IconFlagSvg';

export type IconFlagProps = IconContainerProps;

export const IconFlag = (props: IconFlagProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconFlagSvg} {...svgProps} />}
  </IconContainer>
);
