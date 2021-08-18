import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconDateSvg } from './IconDateSvg';

export type IconDateProps = UseIconProps;

export const IconDate = (props: IconDateProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconDateSvg} {...iconProps} />;
};
