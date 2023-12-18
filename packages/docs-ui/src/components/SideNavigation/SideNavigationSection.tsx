import {
  SideNavigationItem,
  type SubNavigationItem,
} from './SideNavigationItem';
import { Box, HiddenVisually, Stack, Text } from 'braid-design-system';
import * as styles from './SideNavigation.css';
import React from 'react';

interface SideNavigationSection {
  title: string;
  hideTitle?: boolean;
  items: SubNavigationItem[];
}

export const SideNavigationSection = ({
  title,
  hideTitle,
  items,
}: SideNavigationSection) => (
  <Box component="nav">
    <Stack space="small">
      <Box className={styles.uppercase}>
        {hideTitle ? (
          <HiddenVisually>
            <Text size="xsmall" weight="medium" component="h2">
              {title}
            </Text>
          </HiddenVisually>
        ) : (
          <Text size="xsmall" weight="medium" component="h2">
            {title}
          </Text>
        )}
      </Box>

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
