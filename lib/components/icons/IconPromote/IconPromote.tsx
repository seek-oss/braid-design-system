import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconPromoteSvg } from './IconPromoteSvg';

export type IconPromoteProps = UseIconProps;

export const IconPromote = (props: IconPromoteProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconPromoteSvg} {...iconProps} />;
};
