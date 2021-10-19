import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconPersonVerifiedSvg } from './IconPersonVerifiedSvg';

export type IconPersonVerifiedProps = UseIconProps;

export const IconPersonVerified = (props: IconPersonVerifiedProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconPersonVerifiedSvg} {...iconProps} />;
};
