// Import all themes up front so CSS overrides work
import * as themes from '../../../lib/themes';
import * as components from '../../../lib/components';
import React, { useState } from 'react';
import { withRouter, Route, RouteComponentProps } from 'react-router';
import classnames from 'classnames';
import { Logo } from './Logo/Logo';
import { ComponentRoute } from './ComponentRoute/ComponentRoute';
import { Link, ExternalLink } from './Link';
import styles from './App.css.js';

const { ThemeProvider, Text, Box, BulletList, Bullet, Hidden } = components;

interface AppProps extends RouteComponentProps {
  sourceUrlPrefix: string;
}

export const App = withRouter(({ location, sourceUrlPrefix }: AppProps) => {
  const [menuOpenState, setMenuOpen] = useState(false);

  const isHome = location.pathname === '/';
  const isMenuOpen = isHome || menuOpenState;

  return (
    <ThemeProvider theme={themes.wireframe}>
      <div className={styles.header}>
        <Box
          paddingTop="large"
          paddingBottom="xsmall"
          paddingLeft="gutter"
          paddingRight="gutter"
        >
          <div style={{ position: 'relative' }}>
            <Link to="/" inline>
              <Logo />
            </Link>

            <Hidden print>
              <button
                className={classnames({
                  [styles.menuButton]: true,
                  [styles.menuButton__isHidden]: isHome,
                  [styles.menuButton__isOpen]: isMenuOpen && !isHome,
                })}
                onClick={() => setMenuOpen(!menuOpenState)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <div
                  className={classnames(
                    styles.menuButton__bar,
                    styles.menuButton__bar1,
                  )}
                />
                <div
                  className={classnames(
                    styles.menuButton__bar,
                    styles.menuButton__bar2,
                  )}
                />
                <div
                  className={classnames(
                    styles.menuButton__bar,
                    styles.menuButton__bar3,
                  )}
                />
              </button>
            </Hidden>
          </div>
        </Box>
      </div>
      <div className={styles.container}>
        <Hidden print>
          <div
            className={classnames({
              [styles.menu]: true,
              [styles.menu__isOpen]: isMenuOpen,
            })}
          >
            <Box
              paddingTop="small"
              paddingBottom="large"
              paddingLeft="gutter"
              paddingRight="gutter"
            >
              <Box paddingBottom="small">
                <Text size="large" weight="strong">
                  Tools
                </Text>
              </Box>
              <Box paddingBottom="small">
                <BulletList>
                  <Bullet>
                    <ExternalLink
                      inline
                      href="https://github.com/seek-oss/braid-design-system"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                    >
                      Source
                    </ExternalLink>
                  </Bullet>
                  <Bullet>
                    <Link
                      inline
                      to="/playroom"
                      target="_blank"
                      onClick={() => setMenuOpen(false)}
                    >
                      Playroom
                    </Link>
                  </Bullet>
                </BulletList>
              </Box>
              <Box paddingBottom="small">
                <Text size="large" weight="strong">
                  Components
                </Text>
              </Box>
              <Box paddingBottom="small">
                <BulletList>
                  {Object.keys(components)
                    .filter(x => !/icon/i.test(x))
                    .sort()
                    .map(componentName => (
                      <Bullet key={componentName}>
                        <Link
                          inline
                          to={`/components/${componentName}`}
                          onClick={() => setMenuOpen(false)}
                        >
                          {componentName}
                        </Link>
                      </Bullet>
                    ))}
                </BulletList>
              </Box>
              <Box paddingBottom="small">
                <Text size="large" weight="strong">
                  Icons
                </Text>
              </Box>
              <BulletList>
                {Object.keys(components)
                  .filter(x => /icon/i.test(x) && x !== 'Icon')
                  .sort()
                  .map(iconName => (
                    <Bullet key={iconName}>
                      <Link
                        inline
                        to={`/icons/${iconName}`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {iconName}
                      </Link>
                    </Bullet>
                  ))}
              </BulletList>
            </Box>
          </div>
        </Hidden>
        <div className={styles.content}>
          <Box
            paddingLeft="gutter"
            paddingRight="gutter"
            paddingTop="small"
            paddingBottom="xlarge"
          >
            <Route
              path="/components/:componentName"
              render={({ match }) => (
                <ComponentRoute
                  sourceUrlPrefix={sourceUrlPrefix}
                  componentName={match.params.componentName}
                />
              )}
            />
            <Route
              path="/icons/:componentName"
              render={({ match }) => (
                <ComponentRoute
                  sourceUrlPrefix={sourceUrlPrefix}
                  componentName={match.params.componentName}
                  category="icons"
                />
              )}
            />
          </Box>
        </div>
      </div>
    </ThemeProvider>
  );
});
