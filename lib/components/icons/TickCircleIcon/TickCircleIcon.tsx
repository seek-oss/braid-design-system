import React from 'react';
import { Omit } from 'utility-types';
import { Icon, IconProps } from '../Icon/Icon';
import { TickCircleSvg } from './TickCircleSvg';

export type TickCircleIconProps = Omit<IconProps, 'svgComponent'>;

export const TickCircleIcon = (props: TickCircleIconProps) => (
  <Icon svgComponent={TickCircleSvg} {...props} />
);
