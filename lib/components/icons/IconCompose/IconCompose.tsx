import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconComposeSvg } from './IconComposeSvg';

export type IconComposeProps = UseIconProps;

export const IconCompose = (props: IconComposeProps) => {
  const iconProps = useIcon(props);

  return <IconComposeSvg {...iconProps} />;
};
