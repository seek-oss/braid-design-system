import {
  Box,
  Hidden,
  IconSearch,
  Inline,
  Link,
  Text,
  ButtonLink,
} from 'braid-design-system';
import { type ReactNode, useLayoutEffect, useState } from 'react';

import { KeyboardShortcut } from '../KeyboardShortcut/KeyboardShortcut';
import { MenuButton } from '../MenuButton/MenuButton';

import { navLinksContainer, searchButton } from './HeaderNavigation.css';

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

interface HeaderNavigationProps {
  menuOpen?: boolean;
  menuClick?: () => void;
  onSearchClick?: () => void;
  logo: ReactNode;
  logoHref?: string;
  themeToggle?: ReactNode;
  navLinks?: NavLink[];
}

const isApplePlatform = () => /Mac|iPhone|iPod|iPad/i.test(navigator.userAgent);

const NavLink = ({ label, href, active }: NavLink) => (
  <ButtonLink
    variant={active ? 'soft' : 'transparent'}
    key={label}
    href={href}
    size="small"
  >
    {label}
  </ButtonLink>
);

export const HeaderNavigation = ({
  menuOpen = false,
  menuClick = () => {},
  onSearchClick = () => {},
  logo,
  logoHref = '/',
  // themeToggle = null,
  navLinks,
}: HeaderNavigationProps) => {
  const [modifierKey, setModifierKey] = useState('⌘');

  useLayoutEffect(() => {
    if (!isApplePlatform()) {
      setModifierKey('Ctrl');
    }
  }, []);

  return (
    <Box display="flex" alignItems="center">
      <Box>
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
          <Link href={logoHref} tabIndex={menuOpen ? -1 : undefined}>
            <Inline space="small" alignY="center">
              <>{logo}</>
              <Text weight="medium" size="small">
                Braid Design System
              </Text>
            </Inline>
          </Link>
        </Box>
      </Box>

      <Box
        display={{ mobile: 'none', wide: 'flex' }}
        alignItems="center"
        gap="large"
        className={navLinksContainer}
        justifyContent="flexEnd"
      >
        <Box
          component="button"
          padding="xxsmall"
          paddingRight="xsmall"
          borderRadius="standard"
          className={searchButton}
          onClick={onSearchClick}
        >
          <KeyboardShortcut
            keys={[modifierKey, 'K']}
            shortcutLabel={<IconSearch />}
          />
        </Box>
        {navLinks && (
          <Inline space="medium">
            {navLinks.map(({ label, href, active }) => (
              <NavLink key={label} label={label} href={href} active={active} />
            ))}
          </Inline>
        )}
      </Box>
    </Box>
  );
};
