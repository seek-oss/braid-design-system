import { Badge, Box, Inline, Text } from 'braid-design-system';
import type { ComponentProps } from 'react';

import * as styles from './SideNavigationItem.css';

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
  target,
  active,
}: SideNavigationItem) => (
  <Box
    component="a"
    href={path}
    target={target}
    onClick={onClick}
    display="flex"
    width="full"
    borderRadius="standard"
    cursor="pointer"
    background={active ? 'formAccentSoft' : undefined}
    paddingX="small"
    paddingY="xsmall"
    className={styles.link}
  >
    <Inline space="small" alignY="center">
      <Text tone="formAccent" weight="medium" size="small">
        {name}
      </Text>
      {badge ? (
        <Badge bleedY tone={toneForBadge[badge]}>
          {badge}
        </Badge>
      ) : null}
    </Inline>
  </Box>
);
