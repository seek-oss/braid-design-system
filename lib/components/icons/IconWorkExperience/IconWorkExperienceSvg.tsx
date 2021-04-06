import React from 'react';

import { SVGProps } from '../SVGTypes';

export const IconWorkExperienceSvg = ({
  title,
  titleId,
  ...props
}: SVGProps) => (
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
    <path d="M20 6h-3V5a3.003 3.003 0 00-3-3h-4a3.003 3.003 0 00-3 3v1H4a3.003 3.003 0 00-3 3v10a3.003 3.003 0 003 3h16a3.003 3.003 0 003-3V9a3.003 3.003 0 00-3-3zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm6 3v12H9V8zM3 19V9a1 1 0 011-1h3v12H4a1 1 0 01-1-1zm18 0a1 1 0 01-1 1h-3V8h3a1 1 0 011 1z" />
  </svg>
);
