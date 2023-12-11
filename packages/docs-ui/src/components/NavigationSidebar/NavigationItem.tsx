import { Badge, Bleed, ButtonLink, Inline } from 'braid-design-system';
import React from 'react';

type BadgeLabel = 'New' | 'Deprecated';

const toneForBadge = (badgeLabel: BadgeLabel) => {
  const toneMap = {
    Deprecated: 'caution',
    New: 'positive',
  } as const;

  return toneMap[badgeLabel];
};

export interface SubNavigationItem {
  badge?: BadgeLabel;
  name: string;
  path: string;
  onClick?: () => void;
  target?: string;
  active?: boolean;
}

export const NavigationItem = ({
  name,
  badge,
  path,
  onClick,
  target,
  active,
}: SubNavigationItem) => (
  <Inline space="medium" alignY="center">
    <Bleed horizontal="small">
      <ButtonLink
        variant={active ? 'soft' : 'transparent'}
        tone="formAccent"
        size="small"
        href={path}
        onClick={onClick}
        target={target}
      >
        {name}
      </ButtonLink>
    </Bleed>
    {badge ? (
      <Badge bleedY tone={toneForBadge(badge)}>
        {badge}
      </Badge>
    ) : null}
  </Inline>
);
