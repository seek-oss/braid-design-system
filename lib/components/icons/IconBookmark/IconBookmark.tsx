import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconBookmarkSvg } from './IconBookmarkSvg';
import { IconBookmarkActiveSvg } from './IconBookmarkActiveSvg';

export type IconBookmarkProps = UseIconProps & {
  active?: boolean;
};

export const IconBookmark = ({
  active = false,
  ...props
}: IconBookmarkProps) => {
  const iconProps = useIcon(props);

  return active ? (
    <IconBookmarkActiveSvg {...iconProps} />
  ) : (
    <IconBookmarkSvg {...iconProps} />
  );
};
