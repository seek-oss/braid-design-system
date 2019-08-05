import React, { AllHTMLAttributes } from 'react';
import { Box } from '../../../../lib/components';
import useIcon, { UseIconProps } from '../../../../lib/hooks/useIcon';

// Adapted from https://github.com/feathericons/feather
const PlaySvg = (props: AllHTMLAttributes<SVGElement>) => (
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
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

export const PlayIcon = (props: UseIconProps) => {
  const iconProps = useIcon(props);

  return <Box component={PlaySvg} {...iconProps} />;
};
