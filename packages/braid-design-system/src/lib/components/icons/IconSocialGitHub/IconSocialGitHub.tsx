import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconSocialGitHubSvg } from './IconSocialGitHubSvg';

export type IconSocialGitHubProps = IconContainerProps;

export const IconSocialGitHub: FC<IconSocialGitHubProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconSocialGitHubSvg} {...svgProps} />}
  </IconContainer>
);
