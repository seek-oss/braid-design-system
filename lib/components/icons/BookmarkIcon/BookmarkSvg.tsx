import React, { AllHTMLAttributes } from 'react';

export const BookmarkSvg = (props: AllHTMLAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M18,4V20l0,0c-.78-.17-2.93-1.76-4.6-3.41A2,2,0,0,0,12,16a2,2,0,0,0-1.42.59C8.89,18.26,6.76,19.85,6,20l0,0V4H18m0-2H6A2,2,0,0,0,4,4V20a2.07,2.07,0,0,0,2,2c2,0,6-4,6-4s4,4,6,4a2.07,2.07,0,0,0,2-2V4a2,2,0,0,0-2-2Z" />
  </svg>
);

export const BookmarkSvgActive = (props: AllHTMLAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M18,22c-2,0-6-4-6-4s-4,4-6,4a2.07,2.07,0,0,1-2-2V4A2,2,0,0,1,6,2H18a2,2,0,0,1,2,2V20A2.07,2.07,0,0,1,18,22Z" />
  </svg>
);
