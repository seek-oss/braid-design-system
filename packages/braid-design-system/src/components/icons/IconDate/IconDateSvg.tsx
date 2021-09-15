import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconDateSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v12c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3zM4 7c0-.6.4-1 1-1h2v1c0 .6.4 1 1 1s1-.4 1-1V6h6v1c0 .6.4 1 1 1s1-.4 1-1V6h2c.6 0 1 .4 1 1v3H4V7zm16 12c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-7h16v7z" />
  </svg>
);
