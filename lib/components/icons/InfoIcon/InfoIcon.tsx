import React from 'react';
import { Omit } from 'utility-types';
import Icon, { IconProps } from '../Icon/Icon';
import InfoSvg from './InfoSvg';

export type InfoIconProps = Omit<IconProps, 'svgComponent'>;

const InfoIcon = (props: InfoIconProps) => (
  <Icon svgComponent={InfoSvg} {...props} />
);

InfoIcon.displayName = 'InfoIcon';

export default InfoIcon;
