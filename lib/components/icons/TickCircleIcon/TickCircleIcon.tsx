import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { TickCircleSvg } from './TickCircleSvg';

export const TickCircleIcon = (props: UseIconProps) => {
  const iconProps = useIcon(props);

  return <Box component={TickCircleSvg} {...iconProps} />;
};
