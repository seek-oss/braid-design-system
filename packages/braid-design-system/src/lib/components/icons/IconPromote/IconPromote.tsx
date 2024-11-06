import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconPromoteSvg } from './IconPromoteSvg';

export type IconPromoteProps = IconContainerProps;

export const IconPromote = (props: IconPromoteProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconPromoteSvg} {...svgProps} />}
  </IconContainer>
);
