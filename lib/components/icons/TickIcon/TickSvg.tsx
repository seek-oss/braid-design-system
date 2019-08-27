import React, { AllHTMLAttributes } from 'react';

export const TickSvg = (props: AllHTMLAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" {...props}>
    <path
      d="M64.1 167.8L0 103.7l15.8-15.8 48.3 48.3 112-112L191.9 40"
      fill="currentColor"
    />
  </svg>
);
