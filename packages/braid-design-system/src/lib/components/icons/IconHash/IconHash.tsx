import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconHashSvg } from './IconHashSvg';

export type IconHashProps = UseIconProps;

export const IconHash = (props: IconHashProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconHashSvg} {...iconProps} />;
};
