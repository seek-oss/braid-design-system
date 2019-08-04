import React, { AllHTMLAttributes } from 'react';

export const ChevronSvg = (props: AllHTMLAttributes<SVGElement>) => (
  <svg width="16" height="16" viewBox="0 0 1024 1024" {...props}>
    <path d="M945 266l78 67-510 524-510-524 75-69 435 451 432-449z" />
  </svg>
);
