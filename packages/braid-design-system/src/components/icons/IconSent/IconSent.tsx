import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconSentSvg } from './IconSentSvg';

export type IconSentProps = UseIconProps;

export const IconSent = (props: IconSentProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconSentSvg} {...iconProps} />;
};
