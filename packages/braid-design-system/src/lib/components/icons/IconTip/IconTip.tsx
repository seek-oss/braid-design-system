import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconTipSvg } from './IconTipSvg';

export type IconTipProps = IconContainerProps;

export const IconTip = (props: IconTipProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconTipSvg} {...svgProps} />}
  </IconContainer>
);
