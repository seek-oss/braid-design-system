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

const { ContentBlock, Text, Box, Hidden, Stack, Columns, Column } = components;

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
  <Stack space="medium">
    <Text weight="strong" component="h2">
      {title}
    </Text>

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
);

export const Documentation = () => {
  const styles = useStyles(styleRefs);

  const location = useLocation();
  const isComponentsHome = location.pathname === '/components';
  const [isMenuOpen, setMenuOpen] = useState(isComponentsHome);

  const menuRef = useRef<HTMLElement | null>(null);
  useIsolatedScroll(menuRef.current);

  const componentsByCategory = groupBy(
    Object.keys(components)
      .filter(name => {
        if (name.startsWith('Icon')) {
          return false;
        }

        return !undocumentedExports.includes(name);
      })
      .map(name => {
        const docs: ComponentDocs = getComponentDocs({
          componentName: name,
          isIcon: false,
        });

        return { name, ...docs };
      }),
    component => component.category,
  );

  return (
    <ConfigConsumer>
      {({ playroomUrl, sourceUrlPrefix }) => (
        <Box height="full" className={styles.container}>
          <Box
            position="absolute"
            top={0}
            width="full"
            className={[styles.header, isMenuOpen ? styles.isOpen : undefined]}
          >
            <ContentBlock width="large">
              <Box paddingY="medium" paddingX={['gutter', 'large']}>
                <Columns space="large" alignY="center">
                  <Column>
                    <Text baseline={false}>
                      <Box display="flex" alignItems="center">
                        <Hidden print above="mobile">
                          <Box
                            paddingRight="medium"
                            display="flex"
                            alignItems="center"
                          >
                            <MenuButton
                              open={isMenuOpen}
                              onClick={() => setMenuOpen(!isMenuOpen)}
                            />
                          </Box>
                        </Hidden>
                        <Link to="/">
                          <Logo iconOnly height={32} />
                        </Link>
                      </Box>
                    </Text>
                  </Column>
                </Columns>
              </Box>
            </ContentBlock>
          </Box>

          <Box
            position="fixed"
            right={0}
            left={0}
            bottom={0}
            overflow="auto"
            className={styles.contentWrapper}
          >
            <ContentBlock width="large">
              <Box
                position="relative"
                paddingBottom="xxlarge"
                marginX={['none', 'large']}
              >
                <Box
                  ref={menuRef}
                  position="fixed"
                  paddingY="medium"
                  paddingBottom="xxlarge"
                  overflow="auto"
                  bottom={0}
                  marginLeft={['gutter', 'none']}
                  marginRight={['gutter', 'gutter', 'large']}
                  transition="fast"
                  className={[styles.menu, isMenuOpen ? styles.isOpen : '']}
                >
                  <Stack space="xlarge">
                    <MenuSectionList
                      title="Tools"
                      items={[
                        {
                          name: 'Source',
                          path:
                            'https://github.com/seek-oss/braid-design-system',
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

                <Box
                  background="card"
                  borderRadius="standard"
                  boxShadow="medium"
                  transition="fast"
                  paddingY={['xlarge', 'xlarge', 'xxlarge']}
                  paddingX={['gutter', 'xlarge', 'xxlarge']}
                  pointerEvents={isMenuOpen ? 'none' : undefined}
                  className={[
                    styles.content,
                    isComponentsHome ? styles.noContent : '',
                    isMenuOpen && !isComponentsHome ? styles.isOpen : '',
                  ]}
                >
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
                </Box>
              </Box>
            </ContentBlock>
          </Box>
        </Box>
      )}
    </ConfigConsumer>
  );
};
