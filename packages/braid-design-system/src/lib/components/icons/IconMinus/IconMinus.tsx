import React from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconMinusSvg } from './IconMinusSvg';

export type IconMinusProps = IconContainerProps;

export const IconMinus = (props: IconMinusProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconMinusSvg} {...svgProps} />}
  </IconContainer>
);
