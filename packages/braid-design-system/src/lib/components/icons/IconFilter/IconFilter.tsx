import React from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconFilterSvg } from './IconFilterSvg';

export type IconFilterProps = IconContainerProps;

export const IconFilter = (props: IconFilterProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconFilterSvg} {...svgProps} />}
  </IconContainer>
);
