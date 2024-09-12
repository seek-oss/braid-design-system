import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconSocialLinkedInSvg } from './IconSocialLinkedInSvg';

export type IconSocialLinkedInProps = UseIconProps;

export const IconSocialLinkedIn = (props: IconSocialLinkedInProps) => {
  const { isInline, boxProps: iconProps } = useIcon(props);

  const iconElement = <Box component={IconSocialLinkedInSvg} {...iconProps} />;

  return isInline ? (
    <Box component="span" display="inlineBlock">
      {iconElement}
    </Box>
  ) : (
    iconElement
  );
};
