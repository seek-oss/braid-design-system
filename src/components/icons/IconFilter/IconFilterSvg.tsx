import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconFilterSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M6 9.2V5c0-.6-.4-1-1-1s-1 .4-1 1v4.2c-1.2.4-2 1.5-2 2.8 0 1.3.9 2.4 2 2.8V19c0 .6.4 1 1 1s1-.4 1-1v-4.2c1.2-.4 2-1.5 2-2.8 0-1.3-.8-2.4-2-2.8zM5 13c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm8 1.2V5c0-.6-.4-1-1-1s-1 .4-1 1v9.2c-1.2.4-2 1.5-2 2.8 0 1.7 1.3 3 3 3s3-1.3 3-3c0-1.3-.9-2.4-2-2.8zM12 18c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM22 7c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 1.3.9 2.4 2 2.8V19c0 .6.4 1 1 1s1-.4 1-1V9.8c1.1-.4 2-1.5 2-2.8zm-3 1c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
  </svg>
);
