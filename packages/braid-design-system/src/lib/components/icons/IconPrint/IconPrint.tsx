import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconPrintSvg } from './IconPrintSvg';

export type IconPrintProps = UseIconProps;

export const IconPrint = (props: IconPrintProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconPrintSvg} {...iconProps} />;
};
