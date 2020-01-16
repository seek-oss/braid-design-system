import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconTimeSvg } from './IconTimeSvg';

export type IconTimeProps = UseIconProps;

export const IconTime = (props: IconTimeProps) => {
  const iconProps = useIcon(props);

  return <IconTimeSvg {...iconProps} />;
};
