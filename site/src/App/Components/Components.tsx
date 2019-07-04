import React, { useState } from 'react';
import { withRouter, Route, RouteComponentProps } from 'react-router';
import * as components from '../../../../lib/components';
import { Logo } from '../Logo/Logo';
import { ComponentRoute } from './ComponentRoute';
import { Link, ExternalLink } from './Link';
import * as styles from './Components.treat';
import { MenuButton } from '../MenuButton/MenuButton';
import { ConfigConsumer } from '../ConfigContext';

const { Text, Box, BulletList, Bullet, Hidden } = components;

export const Components = withRouter(({ location }: RouteComponentProps) => {
  const [isMenuOpen, setMenuOpen] = useState(
    !/^\/components\/(.*)/.test(location.pathname),
  );

  const isComponentsHome = location.pathname === '/components';
  const showMenuButton = /(?<=\/components\/).*/.test(location.pathname);

  return (
    <ConfigConsumer>
      {({ playroomUrl, sourceUrlPrefix }) => (
        <div>
          <Box
            paddingTop="large"
            paddingBottom="large"
            paddingLeft="gutter"
            paddingRight="gutter"
            position="fixed"
            display="flex"
            width="full"
            className={styles.header}
          >
            <Link to="/" inline>
              <Logo />
            </Link>

            <Box display={[showMenuButton ? 'block' : 'none', 'block']}>
              <MenuButton
                open={isMenuOpen}
                onClick={() => setMenuOpen(!isMenuOpen)}
              />
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection={['column', 'row']}
            className={styles.container}
          >
            <Hidden print>
              <Box
                position="fixed"
                className={`${styles.menu} ${
                  isMenuOpen ? styles.menuOpen : ''
                }`}
              >
                <Box
                  paddingBottom="xlarge"
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
                          rel="noopener noreferrer"
                          onClick={() => setMenuOpen(isComponentsHome)}
                        >
                          Source
                        </ExternalLink>
                      </Bullet>
                      <Bullet>
                        <ExternalLink
                          inline
                          href={playroomUrl}
                          onClick={() => setMenuOpen(isComponentsHome)}
                        >
                          Playroom
                        </ExternalLink>
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
                        .filter(x => !/icon/i.test(x) && !/^use/.test(x))
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
                      .filter(
                        x => /icon/i.test(x) && x !== 'Icon' && !/^use/.test(x),
                      )
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
              </Box>
            </Hidden>
            <Box
              paddingLeft="gutter"
              paddingRight="gutter"
              paddingBottom="xlarge"
              className={styles.content}
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
          </Box>
        </div>
      )}
    </ConfigConsumer>
  );
});
