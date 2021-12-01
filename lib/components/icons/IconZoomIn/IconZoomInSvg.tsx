import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconZoomInSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="m21.707 20.293-3.682-3.682a9.022 9.022 0 1 0-1.414 1.414l3.682 3.682a1 1 0 0 0 1.414-1.414ZM4 11a7 7 0 1 1 11.962 4.93c-.006.006-.013.008-.019.013s-.007.013-.012.02A6.995 6.995 0 0 1 4 11Z" />
    <path d="M14 10h-2V8a1 1 0 0 0-2 0v2H8a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z" />
  </svg>
);
