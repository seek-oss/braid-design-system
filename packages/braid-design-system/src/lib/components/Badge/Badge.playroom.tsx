import type { FC } from 'react';

import { type BadgeProps, Badge as BraidBadge } from './Badge';

export const Badge: FC<BadgeProps> = ({ tone, ...restProps }) => (
  <BraidBadge
    tone={typeof tone !== 'boolean' ? tone : undefined}
    {...restProps}
  />
);
// @ts-expect-error __isBadge__ Braid custom property
Badge.__isBadge__ = true;
