import React, { SVGProps } from 'react';

// TODO: COLORMODE RELEASE
// Use public import
import { Box } from '../../../../lib/components/Box/Box';
import useIcon, { UseIconProps } from '../../../../lib/hooks/useIcon';

// Adapted from https://github.com/feathericons/feather
const CopySvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
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
