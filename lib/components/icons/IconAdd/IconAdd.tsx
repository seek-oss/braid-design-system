import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconAddSvg } from './IconAddSvg';

export type IconAddProps = UseIconProps;

export const IconAdd = (props: IconAddProps) => {
  const iconProps = useIcon(props);

  return <IconAddSvg {...iconProps} />;
};
