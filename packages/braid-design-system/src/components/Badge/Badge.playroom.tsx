import React from 'react';
import type { BadgeProps } from './Badge';
import { Badge as BraidBadge } from './Badge';

export const Badge = ({ tone, ...restProps }: BadgeProps) => (
  <BraidBadge
    tone={typeof tone !== 'boolean' ? tone : undefined}
    {...restProps}
  />
);
