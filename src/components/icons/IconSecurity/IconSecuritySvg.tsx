import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconSecuritySvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M17 10V7c0-2.8-2.2-5-5-5S7 4.2 7 7v3c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3zM9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v3H9V7zm9 12c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v6z" />
  </svg>
);
