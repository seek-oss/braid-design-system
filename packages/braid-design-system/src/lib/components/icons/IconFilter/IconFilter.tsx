import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconFilterSvg } from './IconFilterSvg';

export type IconFilterProps = UseIconProps;

export const IconFilter = (props: IconFilterProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconFilterSvg} {...iconProps} />;
};
