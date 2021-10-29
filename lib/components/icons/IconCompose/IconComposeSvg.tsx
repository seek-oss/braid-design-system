import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconComposeSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="m22.3 1.9-.2-.2C20.9.5 19 .5 17.9 1.7l-7.6 7.6c-.1.1-.2.3-.3.5l-1 4c-.1.3 0 .7.3.9.2.2.4.3.7.3h.2l4-1c.2 0 .3-.1.5-.3l7.6-7.6c.6-.6.9-1.3.9-2.1s-.3-1.6-.9-2.1zm-8.8 10.2-2.1.5.5-2.1L17 5.4 18.6 7l-5.1 5.1zm7.4-7.4-.9.9L18.4 4l.9-.9c.4-.4 1-.4 1.4 0l.2.2c.2.2.3.4.3.7s-.1.5-.3.7z" />
    <path d="M20 11c-.6 0-1 .4-1 1v6c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h6c.6 0 1-.4 1-1s-.4-1-1-1H6C4.3 3 3 4.3 3 6v12c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-6c0-.6-.4-1-1-1z" />
  </svg>
);
