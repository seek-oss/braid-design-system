import React from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconPrintSvg } from './IconPrintSvg';

export type IconPrintProps = IconContainerProps;

export const IconPrint = (props: IconPrintProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconPrintSvg} {...svgProps} />}
  </IconContainer>
);
