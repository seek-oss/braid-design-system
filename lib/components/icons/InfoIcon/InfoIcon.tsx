import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { InfoIconSvg } from './InfoIconSvg';

export type InfoIconProps = UseIconProps;

export const InfoIcon = (props: UseIconProps) => {
  const iconProps = useIcon(props);

  return <Box component={InfoIconSvg} {...iconProps} />;
};
