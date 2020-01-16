import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconHomeSvg } from './IconHomeSvg';

export type IconHomeProps = UseIconProps;

export const IconHome = (props: IconHomeProps) => {
  const iconProps = useIcon(props);

  return <IconHomeSvg {...iconProps} />;
};
