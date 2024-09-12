import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconSocialXSvg } from '../IconSocialX/IconSocialXSvg';

export type IconSocialTwitterProps = UseIconProps;

/** @deprecated - use IconSocialX instead */
export const IconSocialTwitter = (props: IconSocialTwitterProps) => {
  const { isInline, boxProps: iconProps } = useIcon(props);

  const iconElement = <Box component={IconSocialXSvg} {...iconProps} />;

  return isInline ? (
    <Box component="span" display="inlineBlock">
      {iconElement}
    </Box>
  ) : (
    iconElement
  );
};
