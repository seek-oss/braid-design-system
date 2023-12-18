import { NavigationItem, type SubNavigationItem } from './NavigationItem';
import { Box, Stack, Text } from 'braid-design-system';
import * as styles from './Navigation.css';
import React from 'react';

interface NavigationGroup {
  title?: string;
  items: SubNavigationItem[];
}

export const NavigationGroup = ({ title, items }: NavigationGroup) => (
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
          <NavigationItem
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
