import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconSocialFacebookSvg = ({
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
    <path d="M13.227 20v-7.288h2.46l.367-2.853h-2.827V8.042c0-.825.23-1.384 1.413-1.384h1.511V4.111A20.858 20.858 0 0 0 13.958 4a3.424 3.424 0 0 0-3.656 3.759v2.099H7.85v2.853h2.453V20Z" />
  </svg>
);
