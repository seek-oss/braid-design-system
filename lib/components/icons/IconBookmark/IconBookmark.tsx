import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconBookmarkSvg } from './IconBookmarkSvg';
import { IconBookmarkActiveSvg } from './IconBookmarkActiveSvg';

export interface IconBookmarkProps extends UseIconProps {
  active?: boolean;
}

export const IconBookmark = ({
  active = false,
  ...props
}: IconBookmarkProps) => {
  const iconProps = useIcon(props);

  return (
    <Box
      component={active ? IconBookmarkActiveSvg : IconBookmarkSvg}
      {...iconProps}
    />
  );
};
