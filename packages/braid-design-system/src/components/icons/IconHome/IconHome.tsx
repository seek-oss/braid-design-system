import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconHomeSvg } from './IconHomeSvg';

export type IconHomeProps = UseIconProps;

export const IconHome = (props: IconHomeProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconHomeSvg} {...iconProps} />;
};
