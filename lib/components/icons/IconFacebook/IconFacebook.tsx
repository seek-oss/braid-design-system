import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconFacebookSvg } from './IconFacebookSvg';

export type IconFacebookProps = UseIconProps;

export const IconFacebook = (props: IconFacebookProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconFacebookSvg} {...iconProps} />;
};
