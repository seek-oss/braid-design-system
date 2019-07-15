import React, { AllHTMLAttributes } from 'react';
import { Omit } from 'utility-types';
import { Icon, IconProps } from '../../../../lib/components/icons/Icon/Icon';

// Adapted from https://github.com/feathericons/feather
const PlaySvg = (props: AllHTMLAttributes<SVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    style={{ fill: 'none' }}
    {...props}
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

export type PlayIconProps = Omit<IconProps, 'svgComponent'>;

export const PlayIcon = (props: PlayIconProps) => (
  <Icon svgComponent={PlaySvg} {...props} />
);
