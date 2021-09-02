import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconResumeSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M17 2H7C5.3 2 4 3.3 4 5v14c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3zm1 17c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v14z" />
    <circle cx={10} cy={8} r={2} />
    <path d="M15 12H9c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1zm-2 4H9c-.6 0-1 .4-1 1s.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1z" />
  </svg>
);
