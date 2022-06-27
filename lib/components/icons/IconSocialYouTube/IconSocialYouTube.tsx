import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconSocialYouTubeSvg } from './IconSocialYouTubeSvg';

export type IconSocialYouTubeProps = UseIconProps;

export const IconSocialYouTube = (props: IconSocialYouTubeProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconSocialYouTubeSvg} {...iconProps} />;
};
