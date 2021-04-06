import React from 'react';

import { SVGProps } from '../SVGTypes';

export const IconDesktopSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M19.2 2H4.8A2.908 2.908 0 002 5v10a2.908 2.908 0 002.8 3H11v2.005H8a1 1 0 000 2h8a1 1 0 000-2h-3V18h6.2a2.908 2.908 0 002.8-3V5a2.908 2.908 0 00-2.8-3zm.8 13a.93.93 0 01-.8 1H4.8a.93.93 0 01-.8-1V5a.93.93 0 01.8-1h14.4a.93.93 0 01.8 1z" />
  </svg>
);
