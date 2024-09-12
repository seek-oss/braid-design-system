import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconBookmarkSvg } from './IconBookmarkSvg';
import { IconBookmarkActiveSvg } from './IconBookmarkActiveSvg';

export type IconBookmarkProps = UseIconProps & {
  active?: boolean;
};

export const IconBookmark = ({
  active = false,
  ...props
}: IconBookmarkProps) => {
  const { isInline, boxProps: iconProps } = useIcon(props);

  const iconElement = (
    <Box
      component={active ? IconBookmarkActiveSvg : IconBookmarkSvg}
      {...iconProps}
    />
  );

  return isInline ? (
    <Box component="span" display="inlineBlock">
      {iconElement}
    </Box>
  ) : (
    iconElement
  );
};
