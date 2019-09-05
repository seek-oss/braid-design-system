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
  const showMenuButton = /(\/components\/).*/.test(location.pathname);

  return (
    <ConfigConsumer>
      {({ playroomUrl, sourceUrlPrefix }) => (
        <div className={isMenuOpen ? styles.isOpen : undefined}>
          <Box
            paddingY="large"
            paddingX="gutter"
            position="absolute"
            display="flex"
            width="full"
            className={styles.header}
          >
            <Link to="/">
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
              <Box position="fixed" className={styles.menu}>
                <Box paddingBottom="xlarge" paddingX="gutter">
                  <Box paddingBottom="small">
                    <Text size="large" weight="strong">
                      Tools
                    </Text>
                  </Box>
                  <Box paddingBottom="small">
                    <BulletList>
                      <Bullet>
                        <ExternalLink
                          href="https://github.com/seek-oss/braid-design-system"
                          rel="noopener noreferrer"
                          onClick={() => setMenuOpen(isComponentsHome)}
                        >
                          Source
                        </ExternalLink>
                      </Bullet>
                      <Bullet>
                        <ExternalLink
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
              paddingX="gutter"
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
