import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconRocketSvg } from './IconRocketSvg';

export type IconRocketProps = UseIconProps;

export const IconRocket = (props: IconRocketProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconRocketSvg} {...iconProps} />;
};
