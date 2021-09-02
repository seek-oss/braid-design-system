import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconDeleteSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M10 17c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1s-1 .4-1 1v6c0 .6.4 1 1 1zm4 0c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1s-1 .4-1 1v6c0 .6.4 1 1 1z" />
    <path d="M20 4h-4V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v1H4c-.6 0-1 .4-1 1s.4 1 1 1v13c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V6c.6 0 1-.4 1-1s-.4-1-1-1zM10 3h4v1h-4V3zm8 16c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V6h12v13z" />
  </svg>
);
