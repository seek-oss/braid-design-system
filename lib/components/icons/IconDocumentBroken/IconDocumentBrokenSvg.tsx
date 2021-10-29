import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconDocumentBrokenSvg = ({
  title,
  titleId,
  ...props
}: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    focusable="false"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="none" d="M15 5.414V7h1.586L15 5.414z" />
    <path d="m19.707 7.293-5-5A1 1 0 0 0 14 2H7a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h5v-2H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6v4a1 1 0 0 0 1 1h4v5h2V8a1 1 0 0 0-.293-.707ZM15 7V5.414L16.586 7Z" />
    <path d="M19.707 16.293a1 1 0 0 0-1.414 0L17 17.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L15.586 19l-1.293 1.293a1 1 0 1 0 1.414 1.414L17 20.414l1.293 1.293a1 1 0 0 0 1.414-1.414L18.414 19l1.293-1.293a1 1 0 0 0 0-1.414Z" />
  </svg>
);
