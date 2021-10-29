import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconPersonVerifiedSvg = ({
  title,
  titleId,
  ...props
}: SVGProps) => (
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
    <path d="m20.4 4.1-8-3c-.2-.1-.5-.1-.7 0l-8 3c-.4.1-.7.5-.7.9v7c0 6.5 8.2 10.7 8.6 10.9.1.1.2.1.4.1s.3 0 .4-.1c.4-.2 8.6-4.4 8.6-10.9V5c0-.4-.3-.8-.6-.9zM19 12c0 4.5-5.4 7.9-7 8.9-1.6-.9-7-4.3-7-8.9V5.7l7-2.6 7 2.6V12z" />
    <path d="M9.7 11.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2 2c.2.2.5.3.7.3s.5-.1.7-.3l4-4c.4-.4.4-1 0-1.4s-1-.4-1.4 0L11 12.6l-1.3-1.3z" />
  </svg>
);
