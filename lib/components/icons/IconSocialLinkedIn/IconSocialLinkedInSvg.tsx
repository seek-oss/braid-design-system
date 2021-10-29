import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconSocialLinkedInSvg = ({
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
    <path d="M8.134 18.987H5.23V9.653h2.904Zm-1.45-10.61a1.682 1.682 0 1 1 1.68-1.682 1.682 1.682 0 0 1-1.68 1.683ZM19 18.988h-2.9v-4.54c0-1.082-.02-2.474-1.508-2.474-1.51 0-1.74 1.18-1.74 2.397v4.617H9.954V9.653h2.781v1.276h.04a3.047 3.047 0 0 1 2.745-1.508c2.937 0 3.48 1.933 3.48 4.447Z" />
  </svg>
);
