import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconRocketSvg } from './IconRocketSvg';

export type IconRocketProps = UseIconProps;

export const IconRocket = (props: IconRocketProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconRocketSvg} {...iconProps} />;
};
