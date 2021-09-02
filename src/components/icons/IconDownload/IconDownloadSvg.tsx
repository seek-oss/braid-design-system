import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconDownloadSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M19 16c-.6 0-1 .4-1 1v1c0 .6-.5 1-1.1 1H7.1c-.6 0-1-.5-1.1-1v-1c0-.6-.4-1-1-1s-1 .4-1 1v1c0 1.7 1.4 3 3 3h9.9c1.7 0 3.1-1.3 3.1-3v-1c0-.6-.4-1-1-1zm-7.7-1.3c.2.2.5.3.7.3s.5-.1.7-.3l5-5c.4-.4.4-1 0-1.4s-1-.4-1.4 0L13 11.6V4c0-.6-.4-1-1-1s-1 .4-1 1v7.6L7.7 8.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5 5z" />
  </svg>
);
