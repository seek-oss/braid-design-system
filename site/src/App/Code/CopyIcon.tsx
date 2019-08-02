import React, { AllHTMLAttributes } from 'react';
import { Box } from '../../../../lib/components';
import useIcon, { UseIconProps } from '../../../../lib/hooks/useIcon';

// Adapted from https://github.com/feathericons/feather
const CopySvg = (props: AllHTMLAttributes<SVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    style={{ fill: 'none' }}
    {...props}
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

export const CopyIcon = (props: UseIconProps) => {
  const iconProps = useIcon(props);

  return <Box component={CopySvg} {...iconProps} />;
};
