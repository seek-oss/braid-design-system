import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconBookmarkSvg } from './IconBookmarkSvg';
import { IconBookmarkActiveSvg } from './IconBookmarkActiveSvg';

export type IconBookmarkProps = IconContainerProps & {
  active?: boolean;
};

export const IconBookmark = ({
  active = false,
  ...props
}: IconBookmarkProps) => (
  <IconContainer {...props}>
    {(boxProps) => (
      <Box
        component={active ? IconBookmarkActiveSvg : IconBookmarkSvg}
        {...boxProps}
      />
    )}
  </IconContainer>
);
