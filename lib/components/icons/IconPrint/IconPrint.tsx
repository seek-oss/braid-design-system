import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconPrintSvg } from './IconPrintSvg';

export type IconPrintProps = UseIconProps;

export const IconPrint = (props: IconPrintProps) => {
  const iconProps = useIcon(props);

  return <IconPrintSvg {...iconProps} />;
};
