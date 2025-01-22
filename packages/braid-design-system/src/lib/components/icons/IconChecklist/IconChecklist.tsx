import React from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconChecklistSvg } from './IconChecklistSvg';

export type IconChecklistProps = IconContainerProps;

export const IconChecklist = (props: IconChecklistProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconChecklistSvg} {...svgProps} />}
  </IconContainer>
);
