import React, { useState } from 'react';
import { useStyles } from 'sku/treat';
import map from 'lodash/map';
import guides from '../guides';
import { Route, useLocation } from 'react-router-dom';
import * as components from '../../../../lib/components';
import { Logo } from '../Logo/Logo';
import { ComponentRoute } from './ComponentRoute';
import { Iconography } from './Iconography';
import { Tones } from './Tones';
import { Link, ExternalLink } from './Link';
import { MenuButton } from '../MenuButton/MenuButton';
import { ConfigConsumer } from '../ConfigContext';
import * as styleRefs from './Documentation.treat';

const { Heading, Text, Box, Hidden, Stack } = components;

interface MenuItem {
  name: string;
  path: string;
  external: boolean;
  onClick: () => void;
}
const MenuSectionList = ({
  title,
  items,
}: {
  title: string;
  items: MenuItem[];
}) => (
  <Stack space="large">
    <Heading level="4" component="h2">
      {title}
    </Heading>

    <Stack space="gutter">
      {items.map(({ name, path, onClick, external }) => (
        <Text key={name}>
          {external ? (
            <ExternalLink href={path} onClick={onClick}>
              {name}
            </ExternalLink>
          ) : (
            <Link to={path} onClick={onClick}>
              {name}
            </Link>
          )}
        </Text>
      ))}
    </Stack>
  </Stack>
);

const responsiveGutter = ['gutter', 'large'] as const;

export const Documentation = () => {
  const styles = useStyles(styleRefs);

  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(
    !/^\/(guides|components|icons)\/(.*)/.test(location.pathname),
  );

  const isComponentsHome = location.pathname === '/components';
  const showMenuButton = /(\/(guides|components|foundations)\/).*/.test(
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
              <Box className={styles.logo}>
                <Logo />
              </Box>
            </Link>

            <Box
              display={[
                showMenuButton ? 'block' : 'none',
                showMenuButton ? 'block' : 'none',
                'none',
              ]}
            >
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
                paddingTop="small"
                paddingBottom="xlarge"
                paddingX={responsiveGutter}
                className={styles.menu}
              >
                <Stack space="xlarge">
                  <MenuSectionList
                    title="Tools"
                    items={[
                      {
                        name: 'Source',
                        path: 'https://github.com/seek-oss/braid-design-system',
                        external: true,
                        onClick: () => setMenuOpen(isComponentsHome),
                      },
                      {
                        name: 'Playroom',
                        path: playroomUrl,
                        external: true,
                        onClick: () => setMenuOpen(isComponentsHome),
                      },
                    ]}
                  />

                  <MenuSectionList
                    title="Guides"
                    items={map(guides, (guide, path) => ({
                      name: guide.title,
                      path,
                      external: false,
                      onClick: () => setMenuOpen(false),
                    }))}
                  />

                  <MenuSectionList
                    title="Foundations"
                    items={[
                      {
                        name: 'Tones',
                        path: `/foundations/tones`,
                        external: false,
                        onClick: () => setMenuOpen(false),
                      },
                      {
                        name: 'Iconography',
                        path: `/foundations/iconography`,
                        external: false,
                        onClick: () => setMenuOpen(false),
                      },
                    ]}
                  />

                  <MenuSectionList
                    title="Components"
                    items={Object.keys(components)
                      .filter(x => !/^(Icon|use|BoxRenderer)/.test(x))
                      .sort()
                      .map(componentName => ({
                        name: componentName,
                        path: `/components/${componentName}`,
                        external: false,
                        onClick: () => setMenuOpen(false),
                      }))}
                  />
                </Stack>
              </Box>
            </Hidden>
            <Box className={styles.content}>
              <Box paddingY="small" paddingX={responsiveGutter}>
                {map(guides, ({ Component }, path) => (
                  <Route key={path} path={path} component={Component} />
                ))}

                <Route path="/foundations/tones" component={Tones} />

                <Route
                  path="/foundations/iconography"
                  component={Iconography}
                />

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
                      sourceUrlPrefix={sourceUrlPrefix}
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
