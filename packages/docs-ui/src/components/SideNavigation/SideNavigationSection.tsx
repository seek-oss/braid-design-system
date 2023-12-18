import {
  SideNavigationItem,
  type SubNavigationItem,
} from './SideNavigationItem';
import { Box, Stack, Text } from 'braid-design-system';
import * as styles from './SideNavigation.css';
import React from 'react';

interface SideNavigationSection {
  title?: string;
  items: SubNavigationItem[];
}

export const SideNavigationSection = ({
  title,
  items,
}: SideNavigationSection) => (
  <Box component="nav">
    <Stack space="small">
      {title ? (
        <Box className={styles.uppercase}>
          <Text size="xsmall" weight="medium" component="h2">
            {title}
          </Text>
        </Box>
      ) : null}

      <Stack component="ul" space="none">
        {items.map(({ name, badge, path, active, onClick }) => (
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
    </Stack>
  </Box>
);
