import React from 'react';

import type { SVGProps } from '../SVGTypes';

export const IconSocialGitHubSvg = ({ title, titleId, ...props }: SVGProps) => (
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
    <path
      d="M12.006 2a10 10 0 0 0-3.16 19.489c.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341a2.648 2.648 0 0 0-1.11-1.463c-.908-.62.068-.608.068-.608a2.1 2.1 0 0 1 1.532 1.03 2.13 2.13 0 0 0 2.91.831 2.137 2.137 0 0 1 .635-1.336c-2.22-.253-4.555-1.11-4.555-4.943a3.865 3.865 0 0 1 1.03-2.683 3.597 3.597 0 0 1 .098-2.647s.84-.269 2.75 1.026a9.478 9.478 0 0 1 5.007 0c1.909-1.294 2.747-1.026 2.747-1.026a3.592 3.592 0 0 1 .1 2.647 3.859 3.859 0 0 1 1.027 2.683c0 3.842-2.338 4.687-4.566 4.935a2.387 2.387 0 0 1 .68 1.852c0 1.336-.013 2.415-.013 2.743 0 .267.18.578.688.48A10.001 10.001 0 0 0 12.006 2Z"
      fillRule="evenodd"
    />
  </svg>
);
