import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconSortSvg } from './IconSortSvg';

export type IconSortProps = UseIconProps;

export const IconSort = (props: IconSortProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconSortSvg} {...iconProps} />;
};
