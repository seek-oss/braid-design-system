import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconResumeSvg } from './IconResumeSvg';

export type IconResumeProps = UseIconProps;

export const IconResume = (props: IconResumeProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconResumeSvg} {...iconProps} />;
};
