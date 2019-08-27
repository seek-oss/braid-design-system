import React, { AllHTMLAttributes } from 'react';

export const ErrorSvg = (props: AllHTMLAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" {...props}>
    <path
      d="M192 96c0 53-43 96-96 96S0 149 0 96 43 0 96 0s96 43 96 96zM88.2 139.2c-1.4 0-2.5 1.1-2.5 2.5v15.4c0 1.4 1.1 2.5 2.5 2.5h15.5c1.4 0 2.5-1.1 2.5-2.5v-15.4c0-1.4-1.1-2.5-2.5-2.5H88.2zM85.8 117c0 1.4 1.1 2.5 2.5 2.5h15.4c1.4 0 2.5-1.1 2.5-2.5V34.7c0-1.4-1.1-2.5-2.5-2.5H88.3c-1.4 0-2.5 1.1-2.5 2.5V117z"
      fill="currentColor"
    />
  </svg>
);
