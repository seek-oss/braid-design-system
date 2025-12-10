import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconSocialFacebookSvg } from './IconSocialFacebookSvg';

export type IconSocialFacebookProps = IconContainerProps;

export const IconSocialFacebook: FC<IconSocialFacebookProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconSocialFacebookSvg} {...svgProps} />}
  </IconContainer>
);
