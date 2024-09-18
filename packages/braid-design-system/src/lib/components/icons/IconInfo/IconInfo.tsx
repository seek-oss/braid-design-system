import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconInfoSvg } from './IconInfoSvg';

export type IconInfoProps = IconContainerProps;

export const IconInfo = (props: IconInfoProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconInfoSvg} {...svgProps} />}
  </IconContainer>
);
