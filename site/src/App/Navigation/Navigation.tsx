import { HeaderNavigation } from '@braid-design-system/docs-ui';
import {
  Hidden,
  IconChevron,
  IconNewWindow,
  IconRocket,
  IconSocialGitHub,
  MenuItemLink,
  MenuRenderer,
  Text,
  useResponsiveValue,
} from 'braid-src/lib/components';
// TODO: COLORMODE RELEASE
// Use public import
import { type BoxProps, Box } from 'braid-src/lib/components/Box/Box';
import { ScrollContainer } from 'braid-src/lib/components/private/ScrollContainer/ScrollContainer';
import { useState, useRef, useEffect, forwardRef } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { useLocation, Outlet } from 'react-router';
import { useWindowScroll, useInterval } from 'react-use';

import { SideNavigation } from 'site/App/SideNavigation/SideNavigation';

import { useConfig } from '../ConfigContext';
import { Logo } from '../Logo/Logo';
import { ThemeToggle } from '../ThemeSetting';
import { useScrollLock } from '../useScrollLock/useScrollLock';

import { gutterSize, menuButtonSize, headerSpaceY } from './navigationSizes';

import * as styles from './Navigation.css';

const Header = ({
  menuOpen,
  menuClick,
}: {
  menuOpen: boolean;
  menuClick: () => void;
}) => (
  <Box paddingY={headerSpaceY} paddingX={gutterSize}>
    <HeaderNavigation
      menuOpen={menuOpen}
      menuClick={menuClick}
      logo={<Logo iconOnly height={menuButtonSize} />}
      logoLabel="Braid Logo"
      themeToggle={<ThemeToggle />}
    />
  </Box>
);

const FixedContentBlock = forwardRef<HTMLElement, BoxProps>(
  ({ children, ...props }, forwardedRef) => (
    <Box transition="fast" {...props} position="fixed" ref={forwardedRef}>
      {children}
    </Box>
  ),
);

const previewPanelSpace = 'medium';
const PreviewBranchPanel = () => {
  const { pathname, hash } = useLocation();
  const { branchName, headBranchName } = useConfig();

  return branchName ? (
    <Box
      position="fixed"
      zIndex="sticky"
      bottom={0}
      right={0}
      padding={previewPanelSpace}
      className={styles.maxWidthFull}
    >
      <Box
        boxShadow="small"
        borderRadius="large"
        background="cautionLight"
        padding={previewPanelSpace}
        paddingRight="none" // Move to margin below the Menu appears flush with the edge
        display="flex"
        flexWrap="nowrap"
        gap="xsmall"
      >
        <Text icon={<IconRocket />}>
          Branch<Hidden below="tablet">&nbsp;preview</Hidden>:
        </Text>
        <Box minWidth={0}>
          <MenuRenderer
            placement="top"
            align="right"
            offsetSpace={previewPanelSpace}
            trigger={(triggerProps, { open }) => (
              <Box
                userSelect="none"
                cursor="pointer"
                marginRight={previewPanelSpace} // Ensure menu appears flush with the edge of container
                {...triggerProps}
                display="flex"
                gap="xxsmall"
              >
                <Text weight="strong" maxLines={1}>
                  {branchName}{' '}
                </Text>
                <Text>
                  <IconChevron
                    direction={open ? 'down' : 'up'}
                    alignY="lowercase"
                  />
                </Text>
              </Box>
            )}
          >
            <MenuItemLink
              href={`https://seek-oss.github.io/braid-design-system${pathname}${hash}`}
              target="_blank"
              icon={<IconNewWindow />}
            >
              Production site
            </MenuItemLink>
            <MenuItemLink
              href={`https://github.com/seek-oss/braid-design-system/compare/${headBranchName}...${branchName}`}
              target="_blank"
              icon={<IconSocialGitHub />}
            >
              View diff on GitHub
            </MenuItemLink>
          </MenuRenderer>
        </Box>
      </Box>
    </Box>
  ) : null;
};

export const Navigation = () => {
  const lastScrollTop = useRef(0);
  const { y: scrollTop } = useWindowScroll();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);

  const location = useLocation();
  useEffect(() => setDirection(null), [location]);

  useInterval(() => {
    if (lastScrollTop.current !== scrollTop) {
      if (Math.abs(lastScrollTop.current - scrollTop) > 0) {
        setDirection(scrollTop > lastScrollTop.current ? 'down' : 'up');
      }
      lastScrollTop.current = scrollTop;
    }
  }, 250);

  useEffect(() => {
    setShowStickyHeader(scrollTop > 300 && direction === 'up');
  }, [direction, scrollTop]);

  useScrollLock(isMenuOpen);

  const isExpandedSize = useResponsiveValue()({
    mobile: false,
    [styles.visibleNavBreakpoint]: true,
  });

  const navigationActive = isExpandedSize || isMenuOpen;

  return (
    <Box width="full" className={styles.contentBlockXL}>
      <Box position="fixed" top={0}>
        <Header
          menuOpen={isMenuOpen}
          menuClick={() => setMenuOpen(!isMenuOpen)}
        />
      </Box>
      <RemoveScroll enabled={isMenuOpen} forwardProps>
        <Box
          position="fixed"
          bottom={0}
          transition="fast"
          width="full"
          zIndex="sticky"
          inert={navigationActive ? undefined : true}
          className={[
            styles.sideNavigationContainer,
            isMenuOpen ? styles.isOpen : undefined,
          ]}
        >
          <ScrollContainer direction="vertical">
            <Box paddingX={gutterSize} paddingBottom="xxlarge">
              <SideNavigation onSelect={() => setMenuOpen(false)} />
            </Box>
          </ScrollContainer>
        </Box>
      </RemoveScroll>
      <Box
        background={{ lightMode: 'surface', darkMode: 'bodyDark' }}
        position="relative"
        paddingX={{
          mobile: gutterSize,
          wide: 'xxlarge',
        }}
        paddingY="small"
        paddingBottom="xxlarge"
        marginBottom="xxlarge"
        transition="fast"
        pointerEvents={isMenuOpen ? 'none' : undefined}
        className={[styles.pageContent, isMenuOpen ? styles.isOpen : undefined]}
      >
        <Box paddingBottom="xxlarge" marginBottom="xxlarge">
          <Outlet />
          <PreviewBranchPanel />
        </Box>
      </Box>
      <FixedContentBlock
        top={0}
        left={0}
        right={0}
        boxShadow={!isMenuOpen ? 'small' : undefined}
        display={['block', 'none']}
        pointerEvents={showStickyHeader ? undefined : 'none'}
        zIndex="sticky"
        background="body"
        opacity={showStickyHeader ? undefined : 0}
        tabIndex={-1}
        aria-hidden={true}
      >
        <Header
          menuOpen={isMenuOpen}
          menuClick={() => setMenuOpen(!isMenuOpen)}
        />
      </FixedContentBlock>
    </Box>
  );
};
