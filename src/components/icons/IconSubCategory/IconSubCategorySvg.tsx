import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconSubCategorySvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="m18.7 14.3-3-3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.3 1.3H8c-.6 0-1-.4-1-1V6c0-.6-.4-1-1-1s-1 .4-1 1v7c0 1.7 1.3 3 3 3h7.6l-1.3 1.3c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l3-3c.4-.4.4-1 0-1.4z" />
  </svg>
);
