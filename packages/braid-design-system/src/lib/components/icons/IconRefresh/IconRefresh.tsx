import React from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconRefreshSvg } from './IconRefreshSvg';

export type IconRefreshProps = IconContainerProps;

export const IconRefresh = (props: IconRefreshProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconRefreshSvg} {...svgProps} />}
  </IconContainer>
);
