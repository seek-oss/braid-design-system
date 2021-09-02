import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconAddSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M18 11h-5V6c0-.6-.4-1-1-1s-1 .4-1 1v5H6c-.6 0-1 .4-1 1s.4 1 1 1h5v5c0 .6.4 1 1 1s1-.4 1-1v-5h5c.6 0 1-.4 1-1s-.4-1-1-1z" />
  </svg>
);
