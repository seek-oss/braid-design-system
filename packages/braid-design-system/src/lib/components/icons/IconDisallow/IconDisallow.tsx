import React from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconDisallowSvg } from './IconDisallowSvg';

export type IconDisallowProps = IconContainerProps;

export const IconDisallow = (props: IconDisallowProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconDisallowSvg} {...svgProps} />}
  </IconContainer>
);
