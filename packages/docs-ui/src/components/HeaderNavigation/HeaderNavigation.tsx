import {
  Bleed,
  Box,
  Hidden,
  HiddenVisually,
  IconSearch,
  Link,
  Stack,
  Text,
} from 'braid-design-system';
import type { ReactNode } from 'react';

import { KeyboardShortcut } from '../KeyboardShortcut/KeyboardShortcut';
import { MenuButton } from '../MenuButton/MenuButton';

import { searchButton } from './HeaderNavigation.css';

interface HeaderNavigationProps {
  menuOpen?: boolean;
  menuClick?: () => void;
  onSearchClick?: () => void;
  logo: ReactNode;
  logoLabel: string;
  logoHref?: string;
  themeToggle?: ReactNode;
}

export const HeaderNavigation = ({
  menuOpen = false,
  menuClick = () => {},
  onSearchClick = () => {},
  logo,
  logoLabel,
  logoHref = '/',
  themeToggle = null,
}: HeaderNavigationProps) => (
  <Box display="flex" alignItems="center">
    <Hidden print>
      <Box
        paddingRight="medium"
        display={{
          mobile: 'flex',
          wide: 'none',
        }}
        alignItems="center"
      >
        <MenuButton open={menuOpen} onClick={menuClick} />
      </Box>
    </Hidden>
    <Box paddingRight="medium">
      <Text component="div" baseline={false}>
        <Link href={logoHref} tabIndex={menuOpen ? -1 : undefined}>
          {logo}
          <HiddenVisually>{logoLabel}</HiddenVisually>
        </Link>
      </Text>
    </Box>
    <Stack space="none">
      <Box>{themeToggle}</Box>
      <Bleed horizontal="xxsmall" bottom="xxsmall">
        <Box
          component="button"
          padding="xxsmall"
          paddingRight="xsmall"
          borderRadius="standard"
          className={searchButton}
          onClick={onSearchClick}
        >
          <KeyboardShortcut
            keys={[
              navigator.platform.startsWith('Mac') ||
              navigator.platform === 'iPhone' ||
              navigator.platform === 'iPad' ||
              navigator.platform === 'iPod'
                ? '⌘'
                : 'Ctrl',
              'K',
            ]}
            shortcutLabel={<IconSearch />}
          />
        </Box>
      </Bleed>
    </Stack>
  </Box>
);
