import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconGlobeSvg } from './IconGlobeSvg';

export type IconGlobeProps = UseIconProps;

export const IconGlobe = (props: IconGlobeProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconGlobeSvg} {...iconProps} />;
};
