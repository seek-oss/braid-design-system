import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconPersonAddSvg } from './IconPersonAddSvg';

export type IconPersonAddProps = UseIconProps;

export const IconPersonAdd = (props: IconPersonAddProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconPersonAddSvg} {...iconProps} />;
};
