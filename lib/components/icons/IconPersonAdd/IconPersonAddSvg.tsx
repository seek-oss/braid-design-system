import React from 'react';

import { SVGProps } from '../SVGTypes';

export const IconPersonAddSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M9 12a5 5 0 10-5-5 5.006 5.006 0 005 5zm0-8a3 3 0 11-3 3 3.003 3.003 0 013-3zm12 7h-2V9a1 1 0 00-2 0v2h-2a1 1 0 000 2h2v2a1 1 0 002 0v-2h2a1 1 0 000-2zm-10 3H7a5.006 5.006 0 00-5 5v2a1 1 0 002 0v-2a3.003 3.003 0 013-3h4a3.003 3.003 0 013 3v2a1 1 0 002 0v-2a5.006 5.006 0 00-5-5z" />
  </svg>
);
