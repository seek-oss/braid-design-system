import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconSocialMediumSvg } from './IconSocialMediumSvg';

export type IconSocialMediumProps = UseIconProps;

export const IconSocialMedium = (props: IconSocialMediumProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconSocialMediumSvg} {...iconProps} />;
};
