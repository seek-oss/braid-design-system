import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconAISvg } from './IconAISvg';

export type IconAiProps = UseIconProps;

export const IconAI = (props: IconAiProps) => {
  const iconProps = useIcon(props);

  return (
    <Box component="span" display="inlineBlock">
      <Box component={IconAISvg} {...iconProps} />
    </Box>
  );
};
