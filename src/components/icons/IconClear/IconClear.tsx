import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconClearSvg } from './IconClearSvg';

export type IconClearProps = UseIconProps;

export const IconClear = (props: IconClearProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconClearSvg} {...iconProps} />;
};
