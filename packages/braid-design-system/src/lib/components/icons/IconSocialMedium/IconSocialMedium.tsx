import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconSocialMediumSvg } from './IconSocialMediumSvg';

export type IconSocialMediumProps = UseIconProps;

export const IconSocialMedium = (props: IconSocialMediumProps) => {
  const { isInline, boxProps: iconProps } = useIcon(props);

  const iconElement = <Box component={IconSocialMediumSvg} {...iconProps} />;

  return isInline ? (
    <Box component="span" display="inlineBlock">
      {iconElement}
    </Box>
  ) : (
    iconElement
  );
};
