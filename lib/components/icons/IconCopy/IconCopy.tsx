import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconCopySvg } from './IconCopySvg';

export type IconCopyProps = UseIconProps;

export const IconCopy = (props: IconCopyProps) => {
  const iconProps = useIcon(props);

  return <IconCopySvg {...iconProps} />;
};
