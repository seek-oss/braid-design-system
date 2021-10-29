import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconThumbSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M21.66 9.246A2.968 2.968 0 0 0 19.225 8H14V4.91a2.757 2.757 0 0 0-5.443-.74L7.237 9H5a3.003 3.003 0 0 0-3 3v7a3.003 3.003 0 0 0 3 3h11.559a2.996 2.996 0 0 0 2.845-2.05l2.666-8a2.967 2.967 0 0 0-.41-2.704ZM7 20H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2Zm13.174-8.684-2.666 8a1 1 0 0 1-.95.684H9v-9.866l1.486-5.438c.19-.704.7-.692.852-.674.155.022.662.147.663.978L12 8.999A1 1 0 0 0 13 10h6.226a1 1 0 0 1 .948 1.316Z" />
  </svg>
);
