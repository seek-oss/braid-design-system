import React, { AllHTMLAttributes } from 'react';

export const ChevronSvg = (props: AllHTMLAttributes<SVGElement>) => (
  <svg width="16" height="16" viewBox="0 0 1024 1024" {...props}>
    <path d="M798 344l52 53c8 8 8 21 0 30L527 753c-8 8-22 8-30 0L174 427c-8-9-8-22 0-30l53-53c8-9 21-9 30 0l240 242c8 9 22 9 30 1v-1l240-242c9-9 22-9 31 0-1 0-1 0 0 0z" />
  </svg>
);
