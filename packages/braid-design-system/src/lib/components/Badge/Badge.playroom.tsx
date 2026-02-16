import type { FC } from 'react';

import { type BadgeProps, Badge as BraidBadge } from './Badge';

export const Badge: FC<BadgeProps> = ({ tone, children, ...restProps }) => (
  <BraidBadge
    tone={typeof tone !== 'boolean' ? tone : undefined}
    {...restProps}
  >
    {children ?? '\u00A0'}
  </BraidBadge>
);
// @ts-expect-error __isBadge__ Braid custom property
Badge.__isBadge__ = true;
