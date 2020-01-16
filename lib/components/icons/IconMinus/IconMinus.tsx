import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconMinusSvg } from './IconMinusSvg';

export type IconMinusProps = UseIconProps;

export const IconMinus = (props: IconMinusProps) => {
  const iconProps = useIcon(props);

  return <IconMinusSvg {...iconProps} />;
};
