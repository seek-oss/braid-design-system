import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconTagSvg } from './IconTagSvg';

export type IconTagProps = UseIconProps;

export const IconTag = (props: IconTagProps) => {
  const iconProps = useIcon(props);

  return <IconTagSvg {...iconProps} />;
};
