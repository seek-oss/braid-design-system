import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconRecommendedSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M19 8c0-3.9-3.1-7-7-7S5 4.1 5 8c0 2 .8 3.8 2.2 5.1L6 21.9c-.1.4.1.8.4 1 .3.2.7.2 1.1 0l4.5-2.7 4.5 2.7c.1.1.3.1.5.1s.4-.1.5-.2c.3-.2.5-.6.4-1L16.7 13c1.5-1.2 2.3-3 2.3-5zM7 8c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5zm8.7 12.1-3.2-1.9c-.3-.2-.7-.2-1 0l-3.2 1.9.7-5.8c.9.4 1.9.7 3 .7s2.1-.2 3-.7l.7 5.8z" />
  </svg>
);
