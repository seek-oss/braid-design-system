import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconLinkSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M12.848 17.334a6.214 6.214 0 0 1-1.476-.2L9.44 19.066a3.188 3.188 0 1 1-4.51-4.508l2.962-2.961a3.208 3.208 0 0 1 4.509 0 1 1 0 1 0 1.414-1.414 5.205 5.205 0 0 0-6.832-.413 5.102 5.102 0 0 0-.505.413l-2.961 2.96a5.188 5.188 0 0 0 7.337 7.337l3.293-3.293a6.226 6.226 0 0 1-1.3.147Z" />
    <path d="M11.15 6.664a6.214 6.214 0 0 1 1.476.2l1.932-1.932a3.188 3.188 0 1 1 4.508 4.508l-2.96 2.961a3.208 3.208 0 0 1-4.51 0 1 1 0 0 0-1.413 1.414 5.205 5.205 0 0 0 6.831.413 5.101 5.101 0 0 0 .506-.413l2.96-2.96a5.188 5.188 0 0 0-7.336-7.337L9.85 6.812a6.226 6.226 0 0 1 1.298-.148Z" />
  </svg>
);
