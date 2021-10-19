import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconAddSvg } from './IconAddSvg';

export type IconAddProps = UseIconProps;

export const IconAdd = (props: IconAddProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconAddSvg} {...iconProps} />;
};
