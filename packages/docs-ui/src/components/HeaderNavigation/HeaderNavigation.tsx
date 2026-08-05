import {
  Bleed,
  Box,
  Hidden,
  HiddenVisually,
  IconSearch,
  Link,
  Text,
} from 'braid-design-system';
import { type ReactNode, useLayoutEffect, useState } from 'react';

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

const isApplePlatform = () =>
  /Mac|iPhone|iPod|iPad/i.test(navigator.userAgent);

export const HeaderNavigation = ({
  menuOpen = false,
  menuClick = () => {},
  onSearchClick = () => {},
  logo,
  logoLabel,
  logoHref = '/',
  themeToggle = null,
}: HeaderNavigationProps) => {
  const [modifierKey, setModifierKey] = useState<string | null>(null);

  useLayoutEffect(() => {
    setModifierKey(isApplePlatform() ? '⌘' : 'Ctrl');
  }, []);

  return (
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
      <div>
        <>{themeToggle}</>
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
              keys={modifierKey ? [modifierKey, 'K'] : []}
              shortcutLabel={<IconSearch />}
            />
          </Box>
        </Bleed>
      </div>
    </Box>
  );
};
