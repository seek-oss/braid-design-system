import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconPromoteSvg } from './IconPromoteSvg';

export type IconPromoteProps = UseIconProps;

export const IconPromote = (props: IconPromoteProps) => {
  const iconProps = useIcon(props);

  return <IconPromoteSvg {...iconProps} />;
};
