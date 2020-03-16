import React, { useState, useRef } from 'react';
import { useStyles } from 'sku/react-treat';
import map from 'lodash/map';
import groupBy from 'lodash/groupBy';
import guides from '../guides';
import foundations from '../foundations';
import { Route, useLocation } from 'react-router-dom';
import * as components from '../../../../lib/components';
import { useIsolatedScroll } from '../../../../lib/components/Autosuggest/useIsolatedScroll';
import { Logo } from '../Logo/Logo';
import { ComponentRoute } from './ComponentRoute';
import { Link, ExternalLink } from './Link';
import { MenuButton } from '../MenuButton/MenuButton';
import { ConfigConsumer } from '../ConfigContext';
import { ComponentDocs } from '../../types';
import * as styleRefs from './Documentation.treat';
import undocumentedExports from '../../undocumentedExports.json';
import { Overlay } from '../../../../lib/components/private/Overlay/Overlay';

const { ContentBlock, Text, Box, Hidden, Stack } = components;

const componentDocsContext = require.context(
  '../../../../lib/components',
  true,
  /.docs\.tsx$/,
);

const getComponentDocs = ({
  componentName,
  isIcon,
}: {
  componentName: string;
  isIcon: boolean;
}) => {
  const normalizedComponentRoute = isIcon
    ? `./icons/${componentName}/${componentName}.docs.tsx`
    : `./${componentName}/${componentName}.docs.tsx`;

  return componentDocsContext(normalizedComponentRoute).default;
};

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
  <Box component="nav">
    <Stack space="medium">
      <Text weight="strong" component="h2">
        {title}
      </Text>

      <Stack component="ul" space="medium">
        {items.map(({ name, path, onClick, external }) => (
          <Text key={name}>
            {external ? (
              <ExternalLink href={path} onClick={onClick} hitArea="large">
                {name}
              </ExternalLink>
            ) : (
              <Link to={path} onClick={onClick} hitArea="large">
                {name}
              </Link>
            )}
          </Text>
        ))}
      </Stack>
    </Stack>
  </Box>
);

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

  const location = useLocation();
  const isComponentsHome = location.pathname === '/components';
  const [isMenuOpen, setMenuOpen] = useState(isComponentsHome);

  const menuRef = useRef<HTMLElement | null>(null);
  useIsolatedScroll(menuRef.current);

  const filteredComponents = Object.keys(components)
    .filter(name => {
      if (name.startsWith('Icon')) {
        return false;
      }

      return !undocumentedExports.includes(name);
    })
    .sort();

  const componentsByCategory = groupBy(
    filteredComponents.map(name => {
      const docs: ComponentDocs = getComponentDocs({
        componentName: name,
        isIcon: false,
      });

      return { name, ...docs };
    }),
    component => component.category,
  );

  const bottomSpace = 'xxlarge';

  return (
    <ConfigConsumer>
      {({ playroomUrl, sourceUrlPrefix }) => (
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
                <Stack space="xlarge">
                  <MenuSectionList
                    title="Tools"
                    items={[
                      {
                        name: 'Source',
                        path: 'https://github.com/seek-oss/braid-design-system',
                        external: true,
                        onClick: () => {},
                      },
                      {
                        name: 'Playroom',
                        path: playroomUrl,
                        external: true,
                        onClick: () => {},
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
                    items={map(foundations, (guide, path) => ({
                      name: guide.title,
                      path,
                      external: false,
                      onClick: () => setMenuOpen(false),
                    }))}
                  />

                  {['Layout', 'Content', 'Interaction', 'Logic'].map(
                    category => (
                      <MenuSectionList
                        key={category}
                        title={category}
                        items={componentsByCategory[category].map(
                          ({ name }) => ({
                            name,
                            path: `/components/${name}`,
                            external: false,
                            onClick: () => setMenuOpen(false),
                          }),
                        )}
                      />
                    ),
                  )}

                  <MenuSectionList
                    title="All Components"
                    items={filteredComponents.map(componentName => ({
                      name: componentName,
                      path: `/components/${componentName}`,
                      external: false,
                      onClick: () => setMenuOpen(false),
                    }))}
                  />
                </Stack>
              </Box>
            </Box>
            <Box
              display="flex"
              transition="fast"
              paddingLeft={['none', 'gutter', 'large']}
              pointerEvents={isMenuOpen ? 'none' : undefined}
              className={[
                styles.content,
                isComponentsHome ? styles.noContent : '',
                isMenuOpen && !isComponentsHome ? styles.isOpen : '',
              ]}
            >
              <Box position="relative" width="full">
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
      )}
    </ConfigConsumer>
  );
};
