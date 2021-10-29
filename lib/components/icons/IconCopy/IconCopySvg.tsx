import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconCopySvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M14 7H6c-1.7 0-3 1.3-3 3v8c0 1.7 1.3 3 3 3h8c1.7 0 3-1.3 3-3v-8c0-1.7-1.3-3-3-3zm1 11c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-8c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v8z" />
    <path d="M19 2h-8C9.3 2 8 3.3 8 5h2c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1v2c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3z" />
  </svg>
);
