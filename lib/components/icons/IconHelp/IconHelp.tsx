import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconHelpSvg } from './IconHelpSvg';

export type IconHelpProps = UseIconProps;

export const IconHelp = (props: IconHelpProps) => {
  const iconProps = useIcon(props);

  return <IconHelpSvg {...iconProps} />;
};
