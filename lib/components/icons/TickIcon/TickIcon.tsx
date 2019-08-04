import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { TickSvg } from './TickSvg';

export const TickIcon = (props: UseIconProps) => {
  const iconProps = useIcon(props);

  return <Box component={TickSvg} {...iconProps} />;
};
