import React from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconRocketSvg } from './IconRocketSvg';

export type IconRocketProps = IconContainerProps;

export const IconRocket = (props: IconRocketProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconRocketSvg} {...svgProps} />}
  </IconContainer>
);
