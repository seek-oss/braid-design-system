import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconHelpSvg } from './IconHelpSvg';

export type IconHelpProps = UseIconProps;

export const IconHelp = (props: IconHelpProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconHelpSvg} {...iconProps} />;
};
