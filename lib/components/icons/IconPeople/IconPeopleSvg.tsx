import React from 'react';

import type { SVGProps } from '../SVGTypes';

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
    <path d="M14.772 4.023c.076-.006.15-.023.228-.023a3 3 0 0 1 0 6c-.078 0-.152-.017-.228-.023a6.529 6.529 0 0 1-1.325 1.751A4.934 4.934 0 0 0 15 12a5 5 0 0 0 0-10 4.934 4.934 0 0 0-1.553.272 6.529 6.529 0 0 1 1.325 1.751ZM17 14h-1.853a6.54 6.54 0 0 1 1.613 2H17a3.003 3.003 0 0 1 3 3v2a1 1 0 0 0 2 0v-2a5.006 5.006 0 0 0-5-5Z" />
    <path d="M9 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3 3.003 3.003 0 0 0-3-3Zm6 18a1 1 0 0 1-1-1v-2a3.003 3.003 0 0 0-3-3H7a3.003 3.003 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5v2a1 1 0 0 1-1 1Z" />
  </svg>
);
