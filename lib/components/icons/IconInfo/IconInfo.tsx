import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconInfoSvg } from './IconInfoSvg';

export type IconInfoProps = UseIconProps;

export const IconInfo = (props: IconInfoProps) => {
  const iconProps = useIcon(props);

  return <IconInfoSvg {...iconProps} />;
};
