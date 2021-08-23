import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconPrintSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M19 8h-1V3c0-.6-.4-1-1-1H7c-.6 0-1 .4-1 1v5H5c-1.7 0-3 1.3-3 3v4c0 1.7 1.3 3 3 3v3c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-3c1.7 0 3-1.3 3-3v-4c0-1.7-1.3-3-3-3zM8 4h8v4H8V4zm9 16H7v-4h10v4zm3-5c0 .6-.4 1-1 1v-1c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v1c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v4z" />
  </svg>
);
