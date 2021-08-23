import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconPromoteSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M6 10h1c.6 0 1-.4 1-1s-.4-1-1-1H6V7c0-.6-.4-1-1-1s-1 .4-1 1v1H3c-.6 0-1 .4-1 1s.4 1 1 1h1v1c0 .6.4 1 1 1s1-.4 1-1v-1zm5 8h-1v-1c0-.6-.4-1-1-1s-1 .4-1 1v1H7c-.6 0-1 .4-1 1s.4 1 1 1h1v1c0 .6.4 1 1 1s1-.4 1-1v-1h1c.6 0 1-.4 1-1s-.4-1-1-1zm10-7c-2.2 0-4-3.2-4-7 0-.6-.4-1-1-1s-1 .4-1 1c0 3.8-1.8 7-4 7-.6 0-1 .4-1 1s.4 1 1 1c2.2 0 4 3.2 4 7 0 .6.4 1 1 1s1-.4 1-1c0-3.8 1.8-7 4-7 .6 0 1-.4 1-1s-.4-1-1-1zm-5 4c-.6-1.3-1.3-2.3-2.2-3 .9-.7 1.7-1.7 2.2-3 .6 1.3 1.3 2.3 2.2 3-.9.7-1.6 1.7-2.2 3z" />
  </svg>
);
