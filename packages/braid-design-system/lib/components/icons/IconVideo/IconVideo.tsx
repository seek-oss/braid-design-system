import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconVideoSvg } from './IconVideoSvg';

export type IconVideoProps = UseIconProps;

export const IconVideo = (props: IconVideoProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconVideoSvg} {...iconProps} />;
};
