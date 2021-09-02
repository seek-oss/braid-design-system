import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconTagSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M7.4 6.1c-.3-.1-.5-.1-.8 0-.1 0-.2.1-.3.2-.1.1-.2.2-.2.3-.1.1-.1.3-.1.4 0 .1 0 .3.1.4.1.1.1.2.2.3.2.2.4.3.7.3.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.7-.1-.1-.2-.2-.3-.2z" />
    <path d="m22.1 10.9-8.6-8.6c-.2-.2-.4-.3-.7-.3h-8c-1.7 0-3 1.3-3 3v8c0 .3.1.5.3.7l8.6 8.6c.6.6 1.4.9 2.1.9.8 0 1.5-.3 2.1-.9l7.1-7.1.1-.1c1.2-1.2 1.2-3.1 0-4.2zm-1.3 2.7s-.1.1 0 0l-7.3 7.3c-.4.4-1 .4-1.4 0l-8.3-8.3V5c0-.6.4-1 1-1h7.6l8.3 8.3c.4.4.4.9.1 1.3z" />
  </svg>
);
