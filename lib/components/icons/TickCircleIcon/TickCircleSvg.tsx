import React, { AllHTMLAttributes } from 'react';

export const TickCircleSvg = (props: AllHTMLAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" {...props}>
    <path
      d="M96 6C46.3 6 6 46.3 6 96s40.3 90 90 90 90-40.3 90-90S145.7 6 96 6zm53.6 63.9l-67.1 71.8c-1.7 1.8-4.1 2.9-6.6 2.9s-4.9-1-6.6-2.8l-27-28.8c-3.4-3.6-3.2-9.3.4-12.7 3.6-3.4 9.3-3.2 12.7.4L76 122.4l60.5-64.8c3.4-3.6 9.1-3.8 12.7-.4 3.6 3.4 3.9 9.1.4 12.7z"
      fill="currentColor"
    />
  </svg>
);
