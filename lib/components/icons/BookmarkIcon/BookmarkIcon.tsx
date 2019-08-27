import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { BookmarkIconSvg } from './BookmarkIconSvg';
import { BookmarkIconActiveSvg } from './BookmarkIconActiveSvg';

export interface BookmarkIconProps extends UseIconProps {
  active?: boolean;
}

export const BookmarkIcon = ({
  active = false,
  ...props
}: BookmarkIconProps) => {
  const iconProps = useIcon(props);

  return (
    <Box
      component={active ? BookmarkIconActiveSvg : BookmarkIconSvg}
      {...iconProps}
    />
  );
};
