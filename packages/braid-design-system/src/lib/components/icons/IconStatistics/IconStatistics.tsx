import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconStatisticsSvg } from './IconStatisticsSvg';

export type IconStatisticsProps = UseIconProps;

export const IconStatistics = (props: IconStatisticsProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconStatisticsSvg} {...iconProps} />;
};
