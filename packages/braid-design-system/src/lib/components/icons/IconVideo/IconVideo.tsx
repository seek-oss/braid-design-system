import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconVideoSvg } from './IconVideoSvg';

export type IconVideoProps = UseIconProps;

export const IconVideo = (props: IconVideoProps) => {
  const iconProps = useIcon(props);

  return (
    <Box component="span" display="inlineBlock">
      <Box component={IconVideoSvg} {...iconProps} />
    </Box>
  );
};
