import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconPositiveSvg } from './IconPositiveSvg';

export type IconPositiveProps = UseIconProps;

export const IconPositive = (props: IconPositiveProps) => {
  const iconProps = useIcon(props);

  return <IconPositiveSvg {...iconProps} />;
};
