import React from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconQRSvg } from './IconQRSvg';

export type IconQRProps = IconContainerProps;

export const IconQR = (props: IconQRProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconQRSvg} {...svgProps} />}
  </IconContainer>
);
