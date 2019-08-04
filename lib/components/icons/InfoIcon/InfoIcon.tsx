import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { InfoSvg } from './InfoSvg';

export const InfoIcon = (props: UseIconProps) => {
  const iconProps = useIcon(props);

  return <Box component={InfoSvg} {...iconProps} />;
};
