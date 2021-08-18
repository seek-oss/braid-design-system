import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconHistorySvg } from './IconHistorySvg';

export type IconHistoryProps = UseIconProps;

export const IconHistory = (props: IconHistoryProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconHistorySvg} {...iconProps} />;
};
