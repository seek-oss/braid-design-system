import React, {
  useState,
  useRef,
  ReactNode,
  useEffect,
  forwardRef,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useWindowScroll, useInterval } from 'react-use';
import { useStyles } from 'sku/react-treat';
import {
  ContentBlock,
  Text,
  Link,
  Box,
  Hidden,
  HiddenVisually,
} from '../../../../lib/components';
import { useBraidTheme } from '../../../../lib/components/BraidProvider/BraidThemeContext';
import { RemoveScroll } from 'react-remove-scroll';
import { BoxProps } from '../../../../lib/components/Box/Box';
import { SubNavigation } from '../SubNavigation/SubNavigation';
import { useScrollLock } from '../useScrollLock/useScrollLock';
import { MenuButton } from '../MenuButton/MenuButton';
import { Logo } from '../Logo/Logo';
import { gutterSize, menuButtonSize, headerSpaceY } from './navigationSizes';
import * as styleRefs from './Navigation.treat';

const Header = ({
  menuOpen,
  menuClick,
}: {
  menuOpen: boolean;
  menuClick: () => void;
}) => (
  <Box paddingY={headerSpaceY} paddingX={gutterSize}>
    <Text component="div" baseline={false}>
      <Box display="flex" alignItems="center">
        <Hidden print above="tablet">
          <Box paddingRight="medium" display="flex" alignItems="center">
            <MenuButton open={menuOpen} onClick={menuClick} />
          </Box>
        </Hidden>
        <Link href="/" tabIndex={menuOpen ? -1 : undefined}>
          <Logo iconOnly height={menuButtonSize} />
          <HiddenVisually>Braid Logo</HiddenVisually>
        </Link>
      </Box>
    </Text>
  </Box>
);

const FixedContentBlock = forwardRef<HTMLElement, BoxProps>(
  ({ children, ...props }, forwardedRef) => (
    <Box transition="fast" {...props} position="fixed" ref={forwardedRef}>
      <ContentBlock width="large">{children}</ContentBlock>
    </Box>
  ),
);

interface NavigationProps {
  children: ReactNode;
}

export const Navigation = ({ children }: NavigationProps) => {
  const styles = useStyles(styleRefs);
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

  const { body: bodyBackground } = useBraidTheme().color.background;

  return (
    <ContentBlock width="large">
      <Box position="fixed" top={0}>
        <Header
          menuOpen={isMenuOpen}
          menuClick={() => setMenuOpen(!isMenuOpen)}
        />
      </Box>

      <RemoveScroll enabled={isMenuOpen} forwardProps>
        <FixedContentBlock
          overflow="auto"
          bottom={0}
          paddingY="small"
          paddingX={gutterSize}
          paddingBottom="xxlarge"
          width="full"
          display={[
            ...(isMenuOpen
              ? (['block', 'block'] as const)
              : (['none', 'none'] as const)),
            'block',
          ]}
          zIndex="sticky"
          background="body"
          className={[
            styles.subNavigationContainer,
            isMenuOpen ? styles.isOpen : undefined,
          ]}
        >
          <SubNavigation onSelect={() => setMenuOpen(false)} />
        </FixedContentBlock>
      </RemoveScroll>

      <Box
        background="card"
        position="relative"
        paddingX={[gutterSize, gutterSize, 'xxlarge']}
        paddingY={['small', 'xxsmall']}
        paddingBottom="xxlarge"
        marginBottom="xxlarge"
        transition="fast"
        pointerEvents={isMenuOpen ? 'none' : undefined}
        className={[styles.pageContent, isMenuOpen ? styles.isOpen : undefined]}
        style={{
          background: bodyBackground,
        }}
      >
        <Box paddingBottom="xxlarge" marginBottom="xxlarge">
          {children}
        </Box>
      </Box>

      <FixedContentBlock
        top={0}
        left={0}
        right={0}
        boxShadow="small"
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
    </ContentBlock>
  );
};
