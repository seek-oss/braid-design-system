import assert from 'assert';

import {
  Alert,
  Badge,
  Box,
  Divider,
  Heading,
  Link,
  Stack,
  Text,
} from 'braid-src/lib/components';
import type { BadgeProps } from 'braid-src/lib/components/Badge/Badge';
import { useBackgroundLightness } from 'braid-src/lib/components/Box/BackgroundContext';
import { negativeMargin } from 'braid-src/lib/css/negativeMargin/negativeMargin';
import {
  type ReactNode,
  type ReactElement,
  useState,
  cloneElement,
  Children,
  createContext,
  useContext,
} from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import { useParams, useMatch, Outlet, useResolvedPath } from 'react-router';

import { getHistory } from '../Updates';
import {
  getComponentDocs,
  getComponentSnippets,
  getCssDoc,
} from '../navigationHelpers';

import * as styles from './DocNavigation.css';

const DocNavigationItemIndexContext = createContext(-1);
interface DocsProviderContextValue {
  docsName: string;
  docsType: string;
  docs?: ReturnType<typeof getCssDoc | typeof getComponentDocs>;
  history?: ReturnType<typeof getHistory>;
  snippets?: ReturnType<typeof getComponentSnippets>;
}
export const DocsContext = createContext<DocsProviderContextValue>({
  docsName: '',
  docsType: '',
});

interface DocNavigationItemProps {
  href: string;
  badge?: ReactElement<BadgeProps>;
  badgeTitle?: string;
  children: ReactNode;
}
export const DocNavigationItem = ({
  href,
  badge,
  children,
}: DocNavigationItemProps) => {
  assert(
    !badge || badge.props.bleedY === undefined,
    "Badge elements cannot set the 'bleedY' prop when passed to a NavigationItem component",
  );
  const resolved = useResolvedPath(href);
  const active = useMatch({ path: resolved.pathname, end: true });
  const lightness = useBackgroundLightness();
  const index = useContext(DocNavigationItemIndexContext);
  const [hovered, setHovered] = useState(false);

  const badgeSpacing = 'xsmall';
  const badgeElement = badge
    ? cloneElement(badge, { bleedY: true })
    : undefined;

  return (
    <Box component="li">
      <Link
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-current={active ? 'page' : undefined}
        className={styles.docNavLink}
      >
        {/* Active, strong title */}
        <Box
          component="span"
          display="flex"
          gap={badgeSpacing}
          position="relative"
          alignItems="center"
          opacity={active ? undefined : 0}
          paddingY={styles.navItemPaddingY}
        >
          <Box
            component="span"
            position="absolute"
            width="full"
            zIndex={1}
            bottom={0}
            className={[
              styles.activeUnderline,
              styles.activeUnderlineColor[lightness.lightMode],
              styles.activeUnderlineColor[lightness.darkMode],
            ]}
          />
          <Text size="standard" weight="strong">
            {children}
          </Text>
          {badgeElement}
        </Box>

        {/* Inactive, weak title */}
        <Box
          component="span"
          aria-hidden
          display="flex"
          gap={badgeSpacing}
          alignItems="center"
          position="absolute"
          top={0}
          paddingY={styles.navItemPaddingY}
          opacity={active ? 0 : undefined}
          className={index !== 0 ? styles.centerHorizontally : undefined}
        >
          <Text
            size="standard"
            weight="medium"
            tone={hovered ? 'neutral' : 'secondary'}
          >
            {children}
          </Text>
          {badgeElement}
        </Box>
      </Link>
    </Box>
  );
};

interface DocNavigationBarProps {
  title: string;
  children: ReactNode;
}
export const DocNavigationBar = ({
  title,
  children,
}: DocNavigationBarProps) => {
  const navigationItems = flattenChildren(children);

  assert(
    navigationItems.every(
      (navigationItem) =>
        typeof navigationItem === 'object' &&
        navigationItem !== null &&
        'type' in navigationItem &&
        navigationItem.type === DocNavigationItem,
    ),
    'All child nodes within a Navigation must be NavigationItem elements',
  );

  return (
    <Box
      component="nav"
      aria-label={title}
      className={[
        negativeMargin('top', styles.navItemPaddingY),
        negativeMargin('left', styles.navItemPaddingX),
      ]}
    >
      <Box component="ul" display="flex" alignItems="center" overflow="auto">
        {Children.map(navigationItems, (navigationItem, index) => (
          <DocNavigationItemIndexContext.Provider value={index}>
            {navigationItem}
          </DocNavigationItemIndexContext.Provider>
        ))}
      </Box>
      <Box
        paddingLeft={styles.navItemPaddingX}
        className={styles.inactiveUnderlineCorrection}
      >
        <Divider />
      </Box>
    </Box>
  );
};

export const DocNavigation = () => {
  const { docsName = '', docsType = '' } = useParams();
  let snippets: DocsProviderContextValue['snippets'] = [];
  let history: DocsProviderContextValue['history'] = [];
  let docs: DocsProviderContextValue['docs'];

  if (docsType === 'css') {
    history = getHistory(docsName);
    docs = getCssDoc(docsName);
  } else {
    snippets = getComponentSnippets(docsName) || [];

    docs = getComponentDocs(docsName);
    const relevantNames = docs.subComponents
      ? [docsName, ...docs.subComponents]
      : [docsName];

    history = getHistory(...relevantNames);
  }

  const updateCount = Array.from(
    new Set(
      history.filter(({ isRecent }) => isRecent).map(({ version }) => version),
    ),
  ).length;

  return (
    <Stack space={['xlarge', 'xxlarge']}>
      <Stack space={['large', 'xlarge']}>
        <Heading level="1">{docsName}</Heading>
        <DocNavigationBar title="Subnavigation">
          <DocNavigationItem href={`/${docsType}/${docsName}`}>
            Details
          </DocNavigationItem>
          {docsType === 'components' && docsName.indexOf('use') !== 0 ? (
            <DocNavigationItem href={`/${docsType}/${docsName}/props`}>
              Props
            </DocNavigationItem>
          ) : null}
          <DocNavigationItem
            href={`/${docsType}/${docsName}/releases`}
            badge={
              updateCount > 0 ? (
                <Badge
                  tone="promote"
                  weight="strong"
                  title={`${updateCount} release${
                    updateCount === 1 ? '' : 's'
                  } in the last two months`}
                >
                  {String(updateCount)}
                </Badge>
              ) : undefined
            }
          >
            Releases
          </DocNavigationItem>
          {snippets.length > 0 ? (
            <DocNavigationItem href={`/${docsType}/${docsName}/snippets`}>
              Snippets
            </DocNavigationItem>
          ) : null}
        </DocNavigationBar>
        {'deprecationWarning' in docs && docs.deprecationWarning ? (
          <Alert tone="caution">{docs.deprecationWarning}</Alert>
        ) : null}
        {docs.banner}
      </Stack>
      <DocsContext.Provider
        value={{ docsName, docsType, docs, history, snippets }}
      >
        <Outlet />
      </DocsContext.Provider>
    </Stack>
  );
};
