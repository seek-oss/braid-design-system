import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { ErrorSvg } from './ErrorSvg';

export const ErrorIcon = (props: UseIconProps) => {
  const iconProps = useIcon(props);

  return <Box component={ErrorSvg} {...iconProps} />;
};
