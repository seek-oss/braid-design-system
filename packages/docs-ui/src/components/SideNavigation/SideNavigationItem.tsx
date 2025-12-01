import { Badge, ButtonLink } from 'braid-design-system';
import type { ComponentProps } from 'react';

type BadgeLabel = 'New' | 'Deprecated';
type BadgeProps = ComponentProps<typeof Badge>;

const toneForBadge: Record<BadgeLabel, BadgeProps['tone']> = {
  Deprecated: 'caution',
  New: 'positive',
};

export interface SideNavigationItem {
  name: string;
  badge?: BadgeLabel;
  path: string;
  onClick?: () => void;
  target?: string;
  active?: boolean;
}

export const SideNavigationItem = ({
  name,
  badge,
  path,
  onClick,
  active,
}: SideNavigationItem) => (
  <>
    <ButtonLink
      variant={active ? 'soft' : 'transparent'}
      tone="formAccent"
      size="small"
      href={path}
      onClick={onClick}
    >
      {name}
    </ButtonLink>

    {badge ? (
      <Badge bleedY tone={toneForBadge[badge]}>
        {badge}
      </Badge>
    ) : null}
  </>
);
