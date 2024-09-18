import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconLinkSvg } from './IconLinkSvg';

export type IconLinkProps = IconContainerProps;

export const IconLink = (props: IconLinkProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconLinkSvg} {...boxProps} />}
  </IconContainer>
);
