import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconCopySvg } from './IconCopySvg';

export type IconCopyProps = UseIconProps;

export const IconCopy = (props: IconCopyProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconCopySvg} {...iconProps} />;
};
