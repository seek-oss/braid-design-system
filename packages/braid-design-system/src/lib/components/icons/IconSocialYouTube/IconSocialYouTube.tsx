import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconSocialYouTubeSvg } from './IconSocialYouTubeSvg';

export type IconSocialYouTubeProps = UseIconProps;

export const IconSocialYouTube = (props: IconSocialYouTubeProps) => {
  const { isInline, boxProps: iconProps } = useIcon(props);

  const iconElement = <Box component={IconSocialYouTubeSvg} {...iconProps} />;

  return isInline ? (
    <Box component="span" display="inlineBlock">
      {iconElement}
    </Box>
  ) : (
    iconElement
  );
};
