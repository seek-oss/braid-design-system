import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconEducationSvg } from './IconEducationSvg';

export type IconEducationProps = UseIconProps;

export const IconEducation = (props: IconEducationProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconEducationSvg} {...iconProps} />;
};
