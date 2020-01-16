import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconTickSvg } from './IconTickSvg';

export type IconTickProps = UseIconProps;

export const IconTick = (props: IconTickProps) => {
  const iconProps = useIcon(props);

  return <IconTickSvg {...iconProps} />;
};
