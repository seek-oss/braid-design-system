import React, { useState } from 'react';
import map from 'lodash/map';
import guides from '../guides';
import { Route, useLocation } from 'react-router-dom';
import * as components from '../../../../lib/components';
import { Logo } from '../Logo/Logo';
import { ComponentRoute } from './ComponentRoute';
import { Link, ExternalLink } from './Link';
import * as styles from './Documentation.treat';
import { MenuButton } from '../MenuButton/MenuButton';
import { ConfigConsumer } from '../ConfigContext';

const { Text, Box, Hidden, Stack } = components;

const responsiveGutter: ['gutter', 'large'] = ['gutter', 'large'];

export const Documentation = () => {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(
    !/^\/(guides|components|icons)\/(.*)/.test(location.pathname),
  );

  const isComponentsHome = location.pathname === '/components';
  const showMenuButton = /(\/(guides|components|icons)\/).*/.test(
    location.pathname,
  );

  return (
    <ConfigConsumer>
      {({ playroomUrl, sourceUrlPrefix }) => (
        <div className={isMenuOpen ? styles.isOpen : undefined}>
          <Box
            paddingY="large"
            paddingX={responsiveGutter}
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
                <Box paddingBottom="xlarge" paddingX={responsiveGutter}>
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
                      Guides
                    </Text>

                    <Stack space="gutter">
                      {map(guides, (guide, path) => (
                        <Text key={path}>
                          <Link to={path} onClick={() => setMenuOpen(false)}>
                            {guide.title}
                          </Link>
                        </Text>
                      ))}
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
            <Box className={styles.content}>
              <Box paddingX={responsiveGutter}>
                {map(guides, ({ Component }, path) => (
                  <Route key={path} path={path} component={Component} />
                ))}
                <Route
                  path="/components/:componentName"
                  render={({ match }) => (
                    <ComponentRoute
                      sourceUrlPrefix={sourceUrlPrefix}
                      componentName={match.params.componentName}
                      key={match.params.componentName} // Force remount per page to fix hooks errors when generating code snippets
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
          </Box>
        </div>
      )}
    </ConfigConsumer>
  );
};
