import React, {
  useState,
  useRef,
  ReactNode,
  useEffect,
  forwardRef,
} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWindowScroll, useInterval } from 'react-use';
import { useStyles } from 'sku/react-treat';
import { ContentBlock, Text, Box, Hidden } from '../../../../lib/components';
import { useIsolatedScroll } from '../../../../lib/components/Autosuggest/useIsolatedScroll';
import { useBoxStyles } from '../../../../lib/components/Box/useBoxStyles';
import { BoxProps } from '../../../../lib/components/Box/Box';
import { SubNavigation } from '../SubNavigation/SubNavigation';
import { MenuButton } from '../MenuButton/MenuButton';
import { Logo } from '../Logo/Logo';
import * as styleRefs from './Navigation.treat';

const space = 'medium';

const Header = ({
  menuOpen,
  menuClick,
}: {
  menuOpen: boolean;
  menuClick: () => void;
}) => (
  <Box paddingY="large" paddingX={space}>
    <Text component="div" baseline={false}>
      <Box display="flex" alignItems="center">
        <Hidden print above="mobile">
          <Box paddingRight="medium" display="flex" alignItems="center">
            <MenuButton open={menuOpen} onClick={menuClick} />
          </Box>
        </Hidden>
        <Link
          to="/"
          tabIndex={menuOpen ? -1 : undefined}
          className={useBoxStyles({ component: 'a' })}
        >
          <Logo iconOnly height={32} />
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
  const { y: scrollTop } = useWindowScroll();
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);

  useInterval(() => {
    if (lastScrollTop !== scrollTop) {
      if (Math.abs(lastScrollTop - scrollTop) > 0) {
        setDirection(scrollTop > lastScrollTop ? 'down' : 'up');
      }
      setLastScrollTop(scrollTop);
    }
  }, 250);

  const location = useLocation();
  useEffect(() => {
    setDirection(null);
  }, [location]);

  useEffect(() => {
    setShowStickyHeader(scrollTop > 300 && direction === 'up');
  }, [direction, scrollTop]);

  useEffect(() => {
    document.body.classList[isMenuOpen ? 'add' : 'remove'](styles.scrollLock);
  }, [isMenuOpen, styles.scrollLock]);

  const menuRef = useRef<HTMLElement | null>(null);
  useIsolatedScroll(menuRef.current);

  return (
    <ContentBlock width="large">
      <Box paddingRight={['none', space]}>
        <FixedContentBlock top={0} left={0} right={0}>
          <Header
            menuOpen={isMenuOpen}
            menuClick={() => setMenuOpen(!isMenuOpen)}
          />
        </FixedContentBlock>

        <FixedContentBlock
          ref={menuRef}
          overflow="scroll"
          bottom={0}
          paddingY="small"
          paddingX={space}
          paddingBottom="xxlarge"
          width="full"
          display={[isMenuOpen ? 'block' : 'none', 'block']}
          className={[
            styles.subNavigationContainer,
            isMenuOpen ? styles.isOpen : undefined,
          ]}
        >
          <SubNavigation onSelect={() => setMenuOpen(false)} />
        </FixedContentBlock>

        <Box
          position="relative"
          background="card"
          borderRadius="standard"
          boxShadow="medium"
          paddingY={['large', 'large', 'xlarge']}
          paddingX={['medium', 'large', 'xlarge']}
          marginBottom="xxlarge"
          transition="fast"
          pointerEvents={isMenuOpen ? 'none' : undefined}
          className={[
            styles.pageContent,
            isMenuOpen ? styles.isOpen : undefined,
          ]}
        >
          {children}
        </Box>

        <FixedContentBlock
          top={0}
          left={0}
          right={0}
          boxShadow="small"
          display={['block', 'none']}
          pointerEvents={showStickyHeader ? undefined : 'none'}
          className={[
            styles.stickyHeader,
            showStickyHeader ? undefined : styles.hide,
          ]}
          tabIndex={-1}
          aria-hidden={true}
        >
          <Header
            menuOpen={isMenuOpen}
            menuClick={() => setMenuOpen(!isMenuOpen)}
          />
        </FixedContentBlock>
      </Box>
    </ContentBlock>
  );
};
