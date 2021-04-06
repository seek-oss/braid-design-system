import React from 'react';

import { SVGProps } from '../SVGTypes';

export const IconNotificationSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M20 16v-6a8.018 8.018 0 00-5.45-7.577 2.996 2.996 0 00-5.1 0A8.018 8.018 0 004 10v6a1 1 0 000 2h16a1 1 0 000-2zM6 16v-6a6.008 6.008 0 014.411-5.78 1.001 1.001 0 00.663-.591.996.996 0 011.852 0 1.001 1.001 0 00.663.592A6.008 6.008 0 0118 10v6zm6 6a2.991 2.991 0 002.816-2H9.184A2.991 2.991 0 0012 22z" />
  </svg>
);
