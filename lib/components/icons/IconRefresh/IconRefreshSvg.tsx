import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconRefreshSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M23.607 10.29a1 1 0 0 0-1.414 0l-.304.304A9.995 9.995 0 1 0 12 22a1 1 0 0 0 0-2 8 8 0 1 1 7.86-9.457l-.253-.253a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 0-1.414Z" />
  </svg>
);
