import type React from 'react';
import { Box, Hidden, HiddenVisually, Link, Text } from 'braid-design-system';
import { MenuButton } from '../MenuButton/MenuButton';

interface HeaderNavigationProps {
  menuOpen: boolean;
  menuClick: () => void;
  logo: React.ReactNode;
  themeToggle: React.ReactNode;
}

export const HeaderNavigation = ({
  menuOpen,
  menuClick,
  logo,
  themeToggle,
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
        <Link href="/" tabIndex={menuOpen ? -1 : undefined}>
          {logo}
          <HiddenVisually>Braid Logo</HiddenVisually>
        </Link>
      </Text>
    </Box>
    {themeToggle}
  </Box>
);
