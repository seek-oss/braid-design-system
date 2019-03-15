import React from 'react';
import { Omit } from 'utility-types';
import Icon, { IconProps } from '../Icon/Icon';
import ErrorSvg from './ErrorSvg';

export type ErrorIconProps = Omit<IconProps, 'svgComponent'>;

const ErrorIcon = (props: ErrorIconProps) => (
  <Icon svgComponent={ErrorSvg} {...props} />
);

ErrorIcon.displayName = 'ErrorIcon';

export default ErrorIcon;
