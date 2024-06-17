import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconSocialXSvg } from './IconSocialXSvg';

export type IconSocialXProps = UseIconProps;

export const IconSocialX = (props: IconSocialXProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconSocialXSvg} {...iconProps} />;
};
