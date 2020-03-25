import React, { useState, useRef, ReactNode, useEffect } from 'react';
import { useStyles } from 'sku/react-treat';
import { ContentBlock, Text, Box, Hidden } from '../../../../lib/components';
import { useIsolatedScroll } from '../../../../lib/components/Autosuggest/useIsolatedScroll';
import { Overlay } from '../../../../lib/components/private/Overlay/Overlay';
import { Logo } from '../Logo/Logo';
import { Link } from '../Link/Link';
import { MenuButton } from '../MenuButton/MenuButton';
import { SubNavigation } from '../SubNavigation/SubNavigation';
import * as styleRefs from './Navigation.treat';
import { useWindowScroll } from 'react-use';

const Header = ({
  menuOpen,
  menuClick,
}: {
  menuOpen: boolean;
  menuClick: () => void;
}) => (
  <Box paddingY={['medium', 'large']}>
    <Text baseline={false}>
      <Box display="flex" alignItems="center">
        <Hidden print above="mobile">
          <Box paddingRight="medium" display="flex" alignItems="center">
            <MenuButton open={menuOpen} onClick={menuClick} />
          </Box>
        </Hidden>
        <Link to="/" tabIndex={menuOpen ? -1 : undefined}>
          <Logo iconOnly height={32} />
        </Link>
      </Box>
    </Text>
  </Box>
);

interface NavigationProps {
  children: ReactNode;
}
const HEADER_HEIGHT = 96;
const LARGE_SPACE = 32;
const SUBNAV_WIDTH = 300;
export const Navigation = ({ children }: NavigationProps) => {
  const { y: scrollTop } = useWindowScroll();
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useEffect(() => {
    if (scrollTop > HEADER_HEIGHT - LARGE_SPACE) {
      setShowStickyHeader(true);
    } else {
      setShowStickyHeader(false);
    }
  }, [scrollTop]);

  const menuRef = useRef<HTMLElement | null>(null);
  useIsolatedScroll(menuRef.current);

  // const bottomSpace = 'xxlarge';

  return (
    <Box>
      <Box
        position="relative"
        background="positiveLight"
        padding="large"
        style={{ zIndex: 1 }}
      >
        <Text baseline={false}>
          <Link to="/">
            <Logo iconOnly height={32} />
          </Link>
        </Text>
      </Box>

      <Box position="fixed" bottom={0} top={0} style={{ width: SUBNAV_WIDTH }}>
        <Box
          padding="large"
          background="cautionLight"
          transition="fast"
          style={{ opacity: showStickyHeader ? 1 : 0 }}
        >
          <Text baseline={false}>
            <Link to="/">
              <Logo iconOnly height={32} />
            </Link>
          </Text>
        </Box>
        <Box
          ref={menuRef}
          background="criticalLight"
          padding="large"
          overflow="scroll"
        >
          <SubNavigation />
        </Box>
      </Box>

      <Box
        background="infoLight"
        padding="large"
        style={{ marginLeft: SUBNAV_WIDTH }}
      >
        {children}
      </Box>
    </Box>
  );

  // const styles = useStyles(styleRefs);
  // const [isMenuOpen, setMenuOpen] = useState(false);

  // const menuRef = useRef<HTMLElement | null>(null);
  // useIsolatedScroll(menuRef.current);

  // const bottomSpace = 'xxlarge';

  // return (
  //   <Box
  //     paddingX={['gutter', 'large']}
  //     paddingBottom={bottomSpace}
  //     overflow={isMenuOpen ? 'hidden' : undefined}
  //     className={isMenuOpen ? styles.container : undefined}
  //   >
  //     <ContentBlock width="large">
  //       <Box
  //         position={isMenuOpen ? 'fixed' : 'absolute'}
  //         top={0}
  //         bottom={0}
  //         width={isMenuOpen ? 'full' : undefined}
  //         className={[styles.header, isMenuOpen ? styles.isOpen : '']}
  //       >
  //         <Header
  //           menuOpen={isMenuOpen}
  //           menuClick={() => setMenuOpen(!isMenuOpen)}
  //         />

  //         <Box
  //           ref={menuRef}
  //           position="absolute"
  //           bottom={0}
  //           overflow="auto"
  //           paddingBottom={bottomSpace}
  //           width="full"
  //           transition="fast"
  //           className={[styles.menu, isMenuOpen ? styles.isOpen : '']}
  //           role={isMenuOpen ? 'menu' : undefined}
  //         >
  //           <SubNavigation onSelect={() => setMenuOpen(false)} />
  //         </Box>
  //       </Box>
  //       <Box
  //         display="flex"
  //         transition="fast"
  //         paddingLeft={['none', 'gutter', 'large']}
  //         pointerEvents={isMenuOpen ? 'none' : undefined}
  //         className={[styles.content, isMenuOpen ? styles.isOpen : '']}
  //       >
  //         <Box position="relative" width="full">
  //           {children}
  //           <Overlay visible={isMenuOpen} />
  //         </Box>
  //       </Box>
  //     </ContentBlock>
  //   </Box>
  // );
};
