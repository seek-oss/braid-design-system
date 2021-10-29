import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconSentSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M13 8.2V6.4c0-1.1-.9-2-2-2-.5 0-1 .2-1.4.6l-6.3 6.3c-.4.4-.4 1 0 1.4L9.6 19c.8.8 2 .8 2.8 0 .4-.4.6-.9.6-1.4v-1.7c2.5 0 4.9 1.3 6.1 3.6.2.3.5.5.9.5h.2c.4-.1.8-.5.8-1 0-3.3-1.7-9.5-8-10.8zM11.9 14c-.5.1-.9.5-.9 1v2.6L5.4 12 11 6.4V9c0 .5.4.9.9 1 4.1.5 5.8 3.4 6.6 5.7-1.9-1.4-4.3-2-6.6-1.7z" />
  </svg>
);
