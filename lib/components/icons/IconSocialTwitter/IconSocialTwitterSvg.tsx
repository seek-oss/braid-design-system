import React from 'react';

import { SVGProps } from '../SVGTypes';

export const IconSocialTwitterSvg = ({
  title,
  titleId,
  ...props
}: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    focusable="false"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.403 17.689a8.117 8.117 0 008.172-8.172 7.64 7.64 0 00-.008-.372A5.844 5.844 0 0019 7.658a5.734 5.734 0 01-1.65.452 2.882 2.882 0 001.263-1.589 5.756 5.756 0 01-1.823.698 2.875 2.875 0 00-4.895 2.619 8.155 8.155 0 01-5.92-3 2.875 2.875 0 00.889 3.834 2.851 2.851 0 01-1.301-.36l-.001.037a2.874 2.874 0 002.304 2.816 2.868 2.868 0 01-1.297.05 2.876 2.876 0 002.684 1.994 5.764 5.764 0 01-3.568 1.23 5.847 5.847 0 01-.685-.04 8.132 8.132 0 004.403 1.29" />
  </svg>
);
