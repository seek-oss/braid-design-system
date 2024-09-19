import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconLinkBrokenSvg } from './IconLinkBrokenSvg';

export type IconLinkBrokenProps = IconContainerProps;

export const IconLinkBroken = (props: IconLinkBrokenProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconLinkBrokenSvg} {...svgProps} />}
  </IconContainer>
);
