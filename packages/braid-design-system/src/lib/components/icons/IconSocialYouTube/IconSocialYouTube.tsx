import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconSocialYouTubeSvg } from './IconSocialYouTubeSvg';

export type IconSocialYouTubeProps = IconContainerProps;

export const IconSocialYouTube: FC<IconSocialYouTubeProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconSocialYouTubeSvg} {...svgProps} />}
  </IconContainer>
);
