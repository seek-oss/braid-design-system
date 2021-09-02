import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconNoteSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M13 11H8c-.6 0-1 .4-1 1s.4 1 1 1h5c.6 0 1-.4 1-1s-.4-1-1-1zm-2 4H8c-.6 0-1 .4-1 1s.4 1 1 1h3c.6 0 1-.4 1-1s-.4-1-1-1z" />
    <path d="M20.9 8.6c-.1-.1-.1-.2-.2-.3l-5-5c-.1-.1-.2-.2-.3-.2-.1-.1-.3-.1-.4-.1H6C4.3 3 3 4.3 3 6v12c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3V9c0-.1 0-.3-.1-.4zM16 6.4 17.6 8H16V6.4zM18 19H6c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h8v4c0 .6.4 1 1 1h4v8c0 .6-.4 1-1 1z" />
  </svg>
);
