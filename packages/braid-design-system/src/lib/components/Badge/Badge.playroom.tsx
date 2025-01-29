import { type BadgeProps, Badge as BraidBadge } from './Badge';

export const Badge = ({ tone, ...restProps }: BadgeProps) => (
  <BraidBadge
    tone={typeof tone !== 'boolean' ? tone : undefined}
    {...restProps}
  />
);

Badge.__isBadge__ = true;
