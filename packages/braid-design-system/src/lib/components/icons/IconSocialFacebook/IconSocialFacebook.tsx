import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconSocialFacebookSvg } from './IconSocialFacebookSvg';

export type IconSocialFacebookProps = IconContainerProps;

export const IconSocialFacebook = (props: IconSocialFacebookProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconSocialFacebookSvg} {...boxProps} />}
  </IconContainer>
);
