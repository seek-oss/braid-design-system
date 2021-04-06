import React from 'react';

import { SVGProps } from '../SVGTypes';

export const IconStarHalfSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M22.951 8.954a1 1 0 00-.806-.68l-6.391-.935-2.858-5.782a1.042 1.042 0 00-1.793 0L8.246 7.339l-6.39.934a1 1 0 00-.553 1.706l4.623 4.498-1.091 6.354a1 1 0 001.45 1.054L12 18.883l5.715 3.002a1 1 0 001.45-1.054l-1.09-6.354 4.622-4.497a1.002 1.002 0 00.254-1.026zm-6.648 4.456a1 1 0 00-.288.886l.837 4.877-4.387-2.305a.99.99 0 00-.465-.115V4.257l2.193 4.44a1 1 0 00.752.545l4.905.717z" />
  </svg>
);
