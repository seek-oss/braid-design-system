import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconPersonAddSvg } from './IconPersonAddSvg';

export type IconPersonAddProps = UseIconProps;

export const IconPersonAdd = (props: IconPersonAddProps) => {
  const iconProps = useIcon(props);

  return <IconPersonAddSvg {...iconProps} />;
};
