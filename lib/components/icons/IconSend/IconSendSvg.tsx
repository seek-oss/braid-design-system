import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconSendSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M22 3c0-.1 0-.2-.1-.3v-.1c0-.1-.1-.2-.2-.3-.1-.1-.2-.1-.3-.2h-.1c-.1-.1-.2-.1-.3-.1h-.3l-19 6c-.4.2-.6.5-.7.9 0 .4.1.8.5 1l7.8 4.9 4.9 7.8c.2.3.5.5.8.5h.1c.4 0 .7-.3.8-.7l6-19c.1-.2.1-.3.1-.4zm-4.6 2.2-7.5 7.5-5.5-3.4 13-4.1zm-2.7 14.4-3.4-5.5 7.5-7.5-4.1 13z" />
  </svg>
);
