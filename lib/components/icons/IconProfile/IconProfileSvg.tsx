import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconProfileSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M12 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3 3.003 3.003 0 0 0-3-3Zm6 18a1 1 0 0 1-1-1v-2a3.003 3.003 0 0 0-3-3h-4a3.003 3.003 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5v2a1 1 0 0 1-1 1Z" />
  </svg>
);
