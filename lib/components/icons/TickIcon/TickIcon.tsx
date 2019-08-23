import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { TickIconSvg } from './TickIconSvg';

export type TickIconProps = UseIconProps;

export const TickIcon = (props: UseIconProps) => {
  const iconProps = useIcon(props);

  return <Box component={TickIconSvg} {...iconProps} />;
};
