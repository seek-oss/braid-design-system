import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconSocialXSvg } from '../IconSocialX/IconSocialXSvg';

export type IconSocialTwitterProps = UseIconProps;

/** @deprecated - use IconSocialX instead */
export const IconSocialTwitter = (props: IconSocialTwitterProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconSocialXSvg} {...iconProps} />;
};
