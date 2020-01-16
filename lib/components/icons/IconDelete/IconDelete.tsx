import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconDeleteSvg } from './IconDeleteSvg';

export type IconDeleteProps = UseIconProps;

export const IconDelete = (props: IconDeleteProps) => {
  const iconProps = useIcon(props);

  return <IconDeleteSvg {...iconProps} />;
};
