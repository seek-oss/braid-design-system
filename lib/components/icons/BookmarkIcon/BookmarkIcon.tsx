import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { BookmarkSvg, BookmarkSvgActive } from './BookmarkSvg';

export interface BookmarkIconProps extends UseIconProps {
  active?: boolean;
}

export const BookmarkIcon = ({
  active = false,
  ...props
}: BookmarkIconProps) => {
  const iconProps = useIcon(props);

  return (
    <Box component={active ? BookmarkSvgActive : BookmarkSvg} {...iconProps} />
  );
};
