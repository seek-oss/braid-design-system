import type { ReactNode } from 'react';
import { Box, Hidden, HiddenVisually, Link, Text } from 'braid-design-system';
import { MenuButton } from '../MenuButton/MenuButton';

interface HeaderNavigationProps {
  menuOpen?: boolean;
  menuClick?: () => void;
  logo: ReactNode;
  logoLabel: string;
  themeToggle: ReactNode;
}

export const HeaderNavigation = ({
  menuOpen = false,
  menuClick = () => {},
  logo,
  logoLabel,
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
          <HiddenVisually>{logoLabel}</HiddenVisually>
        </Link>
      </Text>
    </Box>
    {themeToggle}
  </Box>
);
