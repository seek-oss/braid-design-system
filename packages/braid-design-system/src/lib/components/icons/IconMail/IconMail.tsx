import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconMailSvg } from './IconMailSvg';

export type IconMailProps = UseIconProps;

export const IconMail = (props: IconMailProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconMailSvg} {...iconProps} />;
};
