import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconStatisticsSvg } from './IconStatisticsSvg';

export type IconStatisticsProps = UseIconProps;

export const IconStatistics = (props: IconStatisticsProps) => {
  const iconProps = useIcon(props);

  return <IconStatisticsSvg {...iconProps} />;
};
