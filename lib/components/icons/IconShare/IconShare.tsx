import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconShareSvg } from './IconShareSvg';

export type IconShareProps = UseIconProps;

export const IconShare = (props: IconShareProps) => {
  const iconProps = useIcon(props);

  return <IconShareSvg {...iconProps} />;
};
