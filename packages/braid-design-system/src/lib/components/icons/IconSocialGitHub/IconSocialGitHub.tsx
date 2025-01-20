import React from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconSocialGitHubSvg } from './IconSocialGitHubSvg';

export type IconSocialGitHubProps = IconContainerProps;

export const IconSocialGitHub = (props: IconSocialGitHubProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconSocialGitHubSvg} {...svgProps} />}
  </IconContainer>
);
