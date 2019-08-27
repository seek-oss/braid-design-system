import React, { AllHTMLAttributes } from 'react';

export const ChevronSvg = (props: AllHTMLAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" {...props}>
    <path
      d="M177.2 49.9l14.6 12.6-95.6 98.3L.6 62.4l14.1-12.9 81.6 84.6 80.9-84.2z"
      fill="currentColor"
    />
  </svg>
);
