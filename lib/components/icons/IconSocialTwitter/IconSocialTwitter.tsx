import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconSocialTwitterSvg } from './IconSocialTwitterSvg';

export type IconSocialTwitterProps = UseIconProps;

export const IconSocialTwitter = (props: IconSocialTwitterProps) => {
  const iconProps = useIcon(props);

  return <IconSocialTwitterSvg {...iconProps} />;
};
