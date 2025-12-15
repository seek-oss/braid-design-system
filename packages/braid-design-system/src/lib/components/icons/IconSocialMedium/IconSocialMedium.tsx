import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconSocialMediumSvg } from './IconSocialMediumSvg';

export type IconSocialMediumProps = IconContainerProps;

export const IconSocialMedium: FC<IconSocialMediumProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconSocialMediumSvg} {...svgProps} />}
  </IconContainer>
);
