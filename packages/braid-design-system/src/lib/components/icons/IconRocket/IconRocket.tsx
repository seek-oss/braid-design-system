import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconRocketSvg } from './IconRocketSvg';

export type IconRocketProps = IconContainerProps;

export const IconRocket = (props: IconRocketProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconRocketSvg} {...boxProps} />}
  </IconContainer>
);
