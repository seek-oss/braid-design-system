import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconMessageSvg } from './IconMessageSvg';

export type IconMessageProps = UseIconProps;

export const IconMessage = (props: IconMessageProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconMessageSvg} {...iconProps} />;
};
