import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconFilterSvg } from './IconFilterSvg';

export type IconFilterProps = UseIconProps;

export const IconFilter = (props: IconFilterProps) => {
  const iconProps = useIcon(props);

  return <IconFilterSvg {...iconProps} />;
};
