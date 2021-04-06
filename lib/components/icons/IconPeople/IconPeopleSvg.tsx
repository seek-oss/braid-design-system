import React from 'react';

import { SVGProps } from '../SVGTypes';

export const IconPeopleSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M14.772 4.023c.076-.006.15-.023.228-.023a3 3 0 010 6c-.078 0-.152-.017-.228-.023a6.529 6.529 0 01-1.325 1.751A4.934 4.934 0 0015 12a5 5 0 000-10 4.934 4.934 0 00-1.553.272 6.529 6.529 0 011.325 1.751zM17 14h-1.853a6.54 6.54 0 011.613 2H17a3.003 3.003 0 013 3v2a1 1 0 002 0v-2a5.006 5.006 0 00-5-5z" />
    <path d="M9 12a5 5 0 115-5 5.006 5.006 0 01-5 5zm0-8a3 3 0 103 3 3.003 3.003 0 00-3-3zm6 18a1 1 0 01-1-1v-2a3.003 3.003 0 00-3-3H7a3.003 3.003 0 00-3 3v2a1 1 0 01-2 0v-2a5.006 5.006 0 015-5h4a5.006 5.006 0 015 5v2a1 1 0 01-1 1z" />
  </svg>
);
