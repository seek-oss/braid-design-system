import React, { useState } from 'react';
import { withRouter, Route, RouteComponentProps } from 'react-router';
import * as components from '../../../../lib/components';
import { Logo } from '../Logo/Logo';
import { ComponentRoute } from './ComponentRoute';
import { Link, ExternalLink } from './Link';
import * as styles from './Components.treat';
import { MenuButton } from '../MenuButton/MenuButton';
import { ConfigConsumer } from '../ConfigContext';

const { Text, Box, Hidden, Stack } = components;

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
            alignItems="center"
            justifyContent="spaceBetween"
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
                  <Stack space="large">
                    <Text size="large" weight="strong">
                      Tools
                    </Text>

                    <Stack space="gutter">
                      <Text>
                        <ExternalLink
                          href="https://github.com/seek-oss/braid-design-system"
                          rel="noopener noreferrer"
                          onClick={() => setMenuOpen(isComponentsHome)}
                        >
                          Source
                        </ExternalLink>
                      </Text>
                      <Text>
                        <ExternalLink
                          href={playroomUrl}
                          onClick={() => setMenuOpen(isComponentsHome)}
                        >
                          Playroom
                        </ExternalLink>
                      </Text>
                    </Stack>

                    <Text size="large" weight="strong">
                      Components
                    </Text>

                    <Stack space="gutter">
                      {Object.keys(components)
                        .filter(
                          x =>
                            !/icon/i.test(x) &&
                            !/^use/.test(x) &&
                            x !== 'BoxRenderer',
                        )
                        .sort()
                        .map(componentName => (
                          <Text key={componentName}>
                            <Link
                              to={`/components/${componentName}`}
                              onClick={() => setMenuOpen(false)}
                            >
                              {componentName}
                            </Link>
                          </Text>
                        ))}
                    </Stack>

                    <Text size="large" weight="strong">
                      Icons
                    </Text>

                    <Stack space="gutter">
                      {Object.keys(components)
                        .filter(
                          x =>
                            /icon/i.test(x) && x !== 'Icon' && !/^use/.test(x),
                        )
                        .sort()
                        .map(iconName => (
                          <Text key={iconName}>
                            <Link
                              to={`/icons/${iconName}`}
                              onClick={() => setMenuOpen(false)}
                            >
                              {iconName}
                            </Link>
                          </Text>
                        ))}
                    </Stack>
                  </Stack>
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
