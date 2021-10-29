import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconHistorySvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M12 6c-.6 0-1 .4-1 1v5c0 .4.2.7.6.9l4 2c.1.1.2.1.4.1.4 0 .7-.2.9-.6.2-.5 0-1.1-.4-1.3L13 11.4V7c0-.6-.4-1-1-1z" />
    <path d="M19.1 4.9C15.2 1 8.8 1 4.9 4.9 3.3 6.6 2.3 8.7 2 11H1c-.4 0-.8.2-.9.6-.2.4-.1.8.2 1.1l2 2c.2.2.4.3.7.3s.5-.1.7-.3l2-2c.3-.3.4-.7.2-1.1-.1-.4-.5-.6-.9-.6h-.9c.2-1.8 1-3.4 2.3-4.7 3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.3-3.1 3.1-8.2 3.1-11.3 0-.4-.4-1-.4-1.4 0s-.4 1 0 1.4c1.9 2 4.4 3 7 3 2.6 0 5.1-1 7.1-2.9 3.9-3.9 3.9-10.3 0-14.2z" />
  </svg>
);
