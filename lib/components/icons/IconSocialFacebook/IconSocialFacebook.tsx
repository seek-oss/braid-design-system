import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconSocialFacebookSvg } from './IconSocialFacebookSvg';

export type IconSocialFacebookProps = UseIconProps;

export const IconSocialFacebook = (props: IconSocialFacebookProps) => {
  const iconProps = useIcon(props);

  return <IconSocialFacebookSvg {...iconProps} />;
};
