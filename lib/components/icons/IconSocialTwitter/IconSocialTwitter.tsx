import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconSocialTwitterSvg } from './IconSocialTwitterSvg';

export type IconSocialTwitterProps = UseIconProps;

export const IconSocialTwitter = (props: IconSocialTwitterProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconSocialTwitterSvg} {...iconProps} />;
};
