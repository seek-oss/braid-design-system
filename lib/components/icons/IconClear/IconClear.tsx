import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconClearSvg } from './IconClearSvg';

export type IconClearProps = UseIconProps;

export const IconClear = (props: IconClearProps) => {
  const iconProps = useIcon(props);

  return <IconClearSvg {...iconProps} />;
};
