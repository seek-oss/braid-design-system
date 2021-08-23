import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconGridSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M8 3H6C4.3 3 3 4.3 3 6v2c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zm1 5c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2zm-1 5H6c-1.7 0-3 1.3-3 3v2c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3v-2c0-1.7-1.3-3-3-3zm1 5c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2zm9-15h-2c-1.7 0-3 1.3-3 3v2c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zm1 5c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2zm-1 5h-2c-1.7 0-3 1.3-3 3v2c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3v-2c0-1.7-1.3-3-3-3zm1 5c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2z" />
  </svg>
);
