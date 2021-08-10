import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconFlagSvg } from './IconFlagSvg';

export type IconFlagProps = UseIconProps;

export const IconFlag = (props: IconFlagProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconFlagSvg} {...iconProps} />;
};
