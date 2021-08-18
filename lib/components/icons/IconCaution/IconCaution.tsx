import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconCautionSvg } from './IconCautionSvg';

export type IconCautionProps = UseIconProps;

export const IconCaution = (props: IconCautionProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconCautionSvg} {...iconProps} />;
};
