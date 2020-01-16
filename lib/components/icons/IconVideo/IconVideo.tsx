import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconVideoSvg } from './IconVideoSvg';

export type IconVideoProps = UseIconProps;

export const IconVideo = (props: IconVideoProps) => {
  const iconProps = useIcon(props);

  return <IconVideoSvg {...iconProps} />;
};
