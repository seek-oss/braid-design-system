import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconMobileSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M12.71 16.29a1.047 1.047 0 0 0-1.42 0 1.029 1.029 0 0 0-.21.33.832.832 0 0 0-.08.38.951.951 0 0 0 .29.7.96.96 0 0 0 .71.3 1 1 0 0 0 .38-.08 1.012 1.012 0 0 0 .33-.22.955.955 0 0 0 .29-.7 1 1 0 0 0-.08-.38 1.029 1.029 0 0 0-.21-.33Z" />
    <path d="M16.286 2H7.714A2.761 2.761 0 0 0 5 4.8v14.4A2.761 2.761 0 0 0 7.714 22h8.572A2.761 2.761 0 0 0 19 19.2V4.8A2.761 2.761 0 0 0 16.286 2ZM17 19.2a.761.761 0 0 1-.714.8H7.714A.761.761 0 0 1 7 19.2V4.8a.761.761 0 0 1 .714-.8h8.572a.761.761 0 0 1 .714.8Z" />
  </svg>
);
