import React from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconAISvg } from './IconAISvg';

export type IconAiProps = IconContainerProps;

export const IconAI = (props: IconAiProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconAISvg} {...svgProps} />}
  </IconContainer>
);
