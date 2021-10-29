import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconFlagSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M19.41 2.967a1.031 1.031 0 0 0-1.08.148 4.778 4.778 0 0 1-2.83.599 8.47 8.47 0 0 1-3.135-.788A10.177 10.177 0 0 0 8.5 2c-2.887 0-4.005.952-4.2 1.144a1 1 0 0 0-.3.713V21a1 1 0 0 0 2 0v-6.298a6.167 6.167 0 0 1 2.5-.416 8.47 8.47 0 0 1 3.135.788A10.177 10.177 0 0 0 15.5 16c2.887 0 4.005-.952 4.2-1.144a1 1 0 0 0 .3-.713V3.857a.996.996 0 0 0-.59-.89ZM18 13.584a6.174 6.174 0 0 1-2.5.416 8.47 8.47 0 0 1-3.135-.788 10.178 10.178 0 0 0-3.865-.926 9.467 9.467 0 0 0-2.5.298V4.416A6.174 6.174 0 0 1 8.5 4a8.47 8.47 0 0 1 3.135.788 10.178 10.178 0 0 0 3.865.926 9.467 9.467 0 0 0 2.5-.298Z" />
  </svg>
);
