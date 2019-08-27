import React, { AllHTMLAttributes } from 'react';

export const BookmarkSvg = (props: AllHTMLAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" {...props}>
    <path
      d="M144 32v128c-6.2-1.4-23.4-14.1-36.8-27.3-3-3-7-4.7-11.2-4.7-4.3 0-8.4 1.7-11.4 4.7C71.1 146.1 54.1 158.8 48 160V32h96m0-16H48c-8.8 0-16 7.2-16 16v128c.3 8.7 7.3 15.7 16 16 16 0 48-32 48-32s32 32 48 32c8.7-.3 15.7-7.3 16-16V32c0-8.8-7.2-16-16-16z"
      fill="currentColor"
    />
  </svg>
);

export const BookmarkSvgActive = (props: AllHTMLAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" {...props}>
    <path
      d="M144 16H48c-8.8 0-16 7.2-16 16v128c.3 8.7 7.3 15.7 16 16 16 0 48-32 48-32s32 32 48 32c8.7-.3 15.7-7.3 16-16V32c0-8.8-7.2-16-16-16z"
      fill="currentColor"
    />
  </svg>
);
