import React from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconSocialMediumSvg } from './IconSocialMediumSvg';

export type IconSocialMediumProps = IconContainerProps;

export const IconSocialMedium = (props: IconSocialMediumProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconSocialMediumSvg} {...svgProps} />}
  </IconContainer>
);
