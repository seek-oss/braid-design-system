import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconOverflowSvg = ({ title, titleId, ...props }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    focusable="false"
    fill="currentColor"
    width={16}
    height={16}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={12} cy={4} r={2} />
    <circle cx={12} cy={20} r={2} />
    <circle cx={12} cy={12} r={2} />
  </svg>
);
