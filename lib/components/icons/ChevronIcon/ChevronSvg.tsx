import React, { AllHTMLAttributes } from 'react';

export type ChevronSvgProps = AllHTMLAttributes<SVGElement>;

export const ChevronSvg = (props: ChevronSvgProps) => (
  <svg width="16" height="16" viewBox="0 0 1024 1024" {...props}>
    <path d="M945 305l78 67-510 524-510-524 75-69 435 451 432-449z" />
  </svg>
);
