import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconSocialXSvg } from './IconSocialXSvg';

export type IconSocialXProps = UseIconProps;

export const IconSocialX = (props: IconSocialXProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconSocialXSvg} {...iconProps} />;
};
