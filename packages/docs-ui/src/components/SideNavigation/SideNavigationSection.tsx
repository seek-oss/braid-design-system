import { Box, HiddenVisually, Stack, Text } from 'braid-design-system';
import * as styles from './SideNavigation.css';
import React from 'react';
import { SideNavigationItem } from './SideNavigationItem';

interface SideNavigationSection {
  title: string;
  hideTitle?: boolean;
  items: SideNavigationItem[];
}

const Title = ({ title }: { title: string }) => (
  <Text size="xsmall" weight="medium" component="h2">
    {title}
  </Text>
);

const ItemList = ({ items }: { items: SideNavigationItem[] }) => (
  <Stack component="ul" space="none">
    {items.map(({ name, badge, path, active, onClick }: SideNavigationItem) => (
      <SideNavigationItem
        name={name}
        badge={badge}
        path={path}
        active={active}
        onClick={onClick}
        key={name}
      />
    ))}
  </Stack>
);

export const SideNavigationSection = ({
  title,
  hideTitle,
  items,
}: SideNavigationSection) => (
  <Box component="nav">
    {hideTitle ? (
      <Stack space="none">
        <HiddenVisually>
          <Title title={title} />
        </HiddenVisually>
        <ItemList items={items} />
      </Stack>
    ) : (
      <Stack space="small">
        <Box className={styles.uppercase}>
          <Title title={title} />
        </Box>
        <ItemList items={items} />
      </Stack>
    )}
  </Box>
);
