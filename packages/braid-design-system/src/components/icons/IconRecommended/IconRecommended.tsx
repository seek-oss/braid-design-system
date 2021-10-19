import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconRecommendedSvg } from './IconRecommendedSvg';

export type IconRecommendedProps = UseIconProps;

export const IconRecommended = (props: IconRecommendedProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconRecommendedSvg} {...iconProps} />;
};
