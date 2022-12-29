import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconTickSvg } from './IconTickSvg';

export type IconTickProps = UseIconProps;

export const IconTick = (props: IconTickProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconTickSvg} {...iconProps} />;
};
