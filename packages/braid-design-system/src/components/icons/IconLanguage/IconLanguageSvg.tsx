import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconLanguageSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path d="M20.784 18.593a10.917 10.917 0 0 0 0-13.186.995.995 0 0 0-.094-.126 10.96 10.96 0 0 0-17.38 0 .99.99 0 0 0-.094.126 10.917 10.917 0 0 0 0 13.186.988.988 0 0 0 .094.126 10.96 10.96 0 0 0 17.38 0 .993.993 0 0 0 .094-.126ZM4.522 7h2.922a14.936 14.936 0 0 0-.902 4H3.06a8.942 8.942 0 0 1 1.463-4Zm12.936 4a14.936 14.936 0 0 0-.902-4h2.922a8.942 8.942 0 0 1 1.463 4ZM4.522 17a8.942 8.942 0 0 1-1.463-4h3.483a14.936 14.936 0 0 0 .902 4Zm4.028-4h6.9a13.453 13.453 0 0 1-1.058 4H9.608a13.453 13.453 0 0 1-1.058-4Zm0-2a13.453 13.453 0 0 1 1.058-4h4.784a13.453 13.453 0 0 1 1.058 4Zm7.12-6a20.175 20.175 0 0 0-.882-1.553A8.988 8.988 0 0 1 17.645 5ZM12 3l.028.001A17.948 17.948 0 0 1 13.382 5h-2.764a17.948 17.948 0 0 1 1.354-1.999ZM8.33 5H6.355a8.988 8.988 0 0 1 2.857-1.553c-.287.456-.587.977-.882 1.553Zm0 14c.295.576.595 1.097.882 1.553A8.988 8.988 0 0 1 6.355 19ZM12 21l-.028-.001A17.948 17.948 0 0 1 10.618 19h2.764a17.948 17.948 0 0 1-1.354 1.999Zm3.67-2h1.975a8.988 8.988 0 0 1-2.857 1.553c.287-.456.587-.977.882-1.553Zm.886-2a14.936 14.936 0 0 0 .902-4h3.483a8.942 8.942 0 0 1-1.463 4Z" />
  </svg>
);