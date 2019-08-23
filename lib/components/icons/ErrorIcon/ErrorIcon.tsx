import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { ErrorIconSvg } from './ErrorIconSvg';

export type ErrorIconProps = UseIconProps;

export const ErrorIcon = (props: UseIconProps) => {
  const iconProps = useIcon(props);

  return <Box component={ErrorIconSvg} {...iconProps} />;
};
