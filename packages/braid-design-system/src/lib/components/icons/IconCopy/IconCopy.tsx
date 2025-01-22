import React from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconCopySvg } from './IconCopySvg';

export type IconCopyProps = IconContainerProps;

export const IconCopy = (props: IconCopyProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconCopySvg} {...svgProps} />}
  </IconContainer>
);
