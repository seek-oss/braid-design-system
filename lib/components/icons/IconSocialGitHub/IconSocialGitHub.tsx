import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconSocialGitHubSvg } from './IconSocialGitHubSvg';

export type IconSocialGitHubProps = UseIconProps;

export const IconSocialGitHub = (props: IconSocialGitHubProps) => {
  const iconProps = useIcon(props);

  return <IconSocialGitHubSvg {...iconProps} />;
};
