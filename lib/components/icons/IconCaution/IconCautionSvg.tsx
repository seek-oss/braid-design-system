import React from 'react';

import { SVGProps } from '../SVGTypes';

export const IconCautionSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M22.71 17.262L14.738 3.71A3.183 3.183 0 0012 2.013 3.183 3.183 0 009.262 3.71L1.29 17.262a3.152 3.152 0 00-.14 3.225A3.152 3.152 0 004 22h16a3.023 3.023 0 002.71-4.738zM20 20H4c-1.1 0-1.544-.776-.986-1.724l7.972-13.552A1.232 1.232 0 0112 4.013a1.232 1.232 0 011.014.71l7.972 13.553C21.544 19.224 21.1 20 20 20z" />
    <circle cx={12} cy={17} r={1} />
    <path d="M11.978 14a1 1 0 001-1V9a1 1 0 00-2 0v4a1 1 0 001 1z" />
  </svg>
);
