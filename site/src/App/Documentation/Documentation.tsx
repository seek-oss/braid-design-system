import React, { useState, useRef } from 'react';
import { useStyles } from 'sku/react-treat';
import map from 'lodash/map';
import guides from '../guides';
import foundations from '../foundations';
import { Route, useLocation } from 'react-router-dom';
import { ContentBlock, Text, Box, Hidden } from '../../../../lib/components';
import { useIsolatedScroll } from '../../../../lib/components/Autosuggest/useIsolatedScroll';
import { Overlay } from '../../../../lib/components/private/Overlay/Overlay';
import { Logo } from '../Logo/Logo';
import { ComponentRoute } from './ComponentRoute';
import { Link } from '../Link/Link';
import { MenuButton } from '../MenuButton/MenuButton';
import { useConfig } from '../ConfigContext';
import { Home } from '../Home/Home';
import { Navigation } from '../Navigation/Navigation';
import { getComponentDocs } from '../Navigation/navigationHelpers';
import * as styleRefs from './Documentation.treat';

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

export const Documentation = () => {
  const styles = useStyles(styleRefs);
  const { sourceUrlPrefix } = useConfig();

  const location = useLocation();
  const isComponentsHome = location.pathname === '/components';
  const [isMenuOpen, setMenuOpen] = useState(isComponentsHome);

  const menuRef = useRef<HTMLElement | null>(null);
  useIsolatedScroll(menuRef.current);

  const bottomSpace = 'xxlarge';

  return (
    <Box
      paddingX={['gutter', 'large']}
      paddingBottom={bottomSpace}
      overflow={isMenuOpen ? 'hidden' : undefined}
      className={isMenuOpen ? styles.container : undefined}
    >
      <ContentBlock width="large">
        <Box
          position={isMenuOpen ? 'fixed' : 'absolute'}
          top={0}
          bottom={0}
          width={isMenuOpen ? 'full' : undefined}
          className={[styles.header, isMenuOpen ? styles.isOpen : '']}
        >
          <Header
            menuOpen={isMenuOpen}
            menuClick={() => setMenuOpen(!isMenuOpen)}
          />

          <Box
            ref={menuRef}
            position="absolute"
            bottom={0}
            overflow="auto"
            paddingBottom={bottomSpace}
            width="full"
            transition="fast"
            className={[styles.menu, isMenuOpen ? styles.isOpen : '']}
            role={isMenuOpen ? 'menu' : undefined}
          >
            <Navigation onSelect={() => setMenuOpen(false)} />
          </Box>
        </Box>
        <Box
          display="flex"
          transition="fast"
          paddingLeft={['none', 'gutter', 'large']}
          pointerEvents={isMenuOpen ? 'none' : undefined}
          className={[
            styles.content,
            isMenuOpen && !isComponentsHome ? styles.isOpen : '',
          ]}
        >
          <Box position="relative" width="full">
            <Route path="/" exact component={Home} />

            {map({ ...guides, ...foundations }, ({ Component }, path) => (
              <Route key={path} path={path} component={Component} />
            ))}

            <Route
              path="/components/:componentName"
              render={({ match }) => (
                <ComponentRoute
                  key={match.params.componentName} // Force remount per page to fix hooks errors when generating code snippets
                  subfolder={
                    /^Icon/.test(match.params.componentName)
                      ? 'icons'
                      : undefined
                  }
                  componentName={match.params.componentName}
                  docs={getComponentDocs({
                    componentName: match.params.componentName,
                    isIcon: /^Icon/.test(match.params.componentName),
                  })}
                  sourceUrlPrefix={sourceUrlPrefix}
                />
              )}
            />
            <Overlay visible={isMenuOpen} />
          </Box>
        </Box>
      </ContentBlock>
    </Box>
  );
};
