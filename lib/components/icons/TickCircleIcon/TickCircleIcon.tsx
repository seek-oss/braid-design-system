import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { TickCircleIconSvg } from './TickCircleIconSvg';

export type TickCircleIconProps = UseIconProps;

export const TickCircleIcon = (props: UseIconProps) => {
  const iconProps = useIcon(props);

  return <Box component={TickCircleIconSvg} {...iconProps} />;
};
