import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconListSvg } from './IconListSvg';

export type IconListProps = UseIconProps;

export const IconList = (props: IconListProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconListSvg} {...iconProps} />;
};
