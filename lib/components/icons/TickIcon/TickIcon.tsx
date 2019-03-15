import React from 'react';
import { Omit } from 'utility-types';
import Icon, { IconProps } from '../Icon/Icon';
import TickSvg from './TickSvg';

export type TickIconProps = Omit<IconProps, 'svgComponent'>;

const TickIcon = (props: TickIconProps) => (
  <Icon svgComponent={TickSvg} {...props} />
);

TickIcon.displayName = 'TickIcon';

export default TickIcon;
