import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconSocialFacebookSvg } from './IconSocialFacebookSvg';

export type IconSocialFacebookProps = UseIconProps;

export const IconSocialFacebook = (props: IconSocialFacebookProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconSocialFacebookSvg} {...iconProps} />;
};
