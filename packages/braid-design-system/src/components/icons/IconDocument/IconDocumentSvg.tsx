import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconDocumentSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="m19.5 6.7-3.6-3.2-1.2-1.2c-.2-.2-.4-.3-.7-.3H5.8C4.8 2 4 3.1 4 4.5V20c-.1 1 .7 1.9 1.7 2H18c1 .1 1.9-.7 2-1.7V8c0-.5-.2-1-.5-1.3zM15 5.4 16.6 7H15V5.4zM7 20c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h6v4c0 .6.4 1 1 1h4v10c0 .6-.4 1-1 1H7z" />
    <path d="M14 11H9c-.6 0-1 .4-1 1s.4 1 1 1h5c.6 0 1-.4 1-1s-.4-1-1-1zm-2 4H9c-.6 0-1 .4-1 1s.4 1 1 1h3c.6 0 1-.4 1-1s-.4-1-1-1z" />
  </svg>
);
