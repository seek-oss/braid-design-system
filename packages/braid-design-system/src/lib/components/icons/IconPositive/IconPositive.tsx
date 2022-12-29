import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconPositiveSvg } from './IconPositiveSvg';

export type IconPositiveProps = UseIconProps;

export const IconPositive = (props: IconPositiveProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconPositiveSvg} {...iconProps} />;
};
