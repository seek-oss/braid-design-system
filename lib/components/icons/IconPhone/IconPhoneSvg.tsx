import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconPhoneSvg = ({ title, titleId, ...props }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    focusable="false"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18.338 20.999a2.45 2.45 0 0 1-.292-.017A17.205 17.205 0 0 1 3.018 5.954a2.63 2.63 0 0 1 .655-2.047A2.723 2.723 0 0 1 5.699 3h3.29a1 1 0 0 1 .894.553l1.694 3.387a1 1 0 0 1-.062 1.002l-1.33 1.995a14.439 14.439 0 0 0 3.754 3.792l1.119-1.119a1.003 1.003 0 0 1 1.078-.221l4.235 1.694a1 1 0 0 1 .629.929V18.3a2.723 2.723 0 0 1-.907 2.026 2.641 2.641 0 0 1-1.755.672ZM5.699 5a.717.717 0 0 0-.534.24.63.63 0 0 0-.161.488 15.191 15.191 0 0 0 13.268 13.268.65.65 0 0 0 .489-.161.717.717 0 0 0 .239-.534v-2.613l-2.994-1.197-1.229 1.228a.998.998 0 0 1-1.236.141 16.495 16.495 0 0 1-5.402-5.403.998.998 0 0 1 .017-1.082l1.372-2.059L8.37 5Z" />
  </svg>
);
