import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconStatisticsSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M20 20H4a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2ZM4 16a1 1 0 0 1-.707-1.707l5-5a1 1 0 0 1 1.414 0L12 11.586l7.293-7.293a1 1 0 0 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0L9 11.414l-4.293 4.293A.997.997 0 0 1 4 16Z" />
    <path d="M20 20H4a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2ZM4 16a1 1 0 0 1-.707-1.707l5-5a1 1 0 0 1 1.414 0L12 11.586l7.293-7.293a1 1 0 0 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0L9 11.414l-4.293 4.293A.997.997 0 0 1 4 16Z" />
  </svg>
);
