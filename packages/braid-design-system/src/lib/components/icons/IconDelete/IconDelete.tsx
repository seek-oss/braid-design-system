import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconDeleteSvg } from './IconDeleteSvg';

export type IconDeleteProps = UseIconProps;

export const IconDelete = (props: IconDeleteProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconDeleteSvg} {...iconProps} />;
};
