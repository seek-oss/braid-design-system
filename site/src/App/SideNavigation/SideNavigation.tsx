import { SideNavigationSection } from '@braid-design-system/docs-ui';
import { Box, Stack } from 'braid-design-system';
import { useMemo } from 'react';
import { matchPath, useLocation } from 'react-router';

import { useConfig } from '../ConfigContext';
import { isNew } from '../Updates';
import {
  allTemplateDocs,
  categorisedComponents,
  documentedComponents,
  documentedCss,
} from '../navigationHelpers';
import { navSections } from '../navigationSections';
import { foundationNavItems } from '../routes/foundations';
import guides from '../routes/guides';
import { howToNavItems, patternNavItems } from '../routes/patterns';
import { templateGroupPath } from '../routes/templates/templateDocs';

type BadgeLabel = 'New' | 'Deprecated';

const componentsList = documentedComponents.filter(
  ({ category }) => category !== 'Logic',
);

const templateGroups = [...new Set(allTemplateDocs.map((doc) => doc.group))];

interface SideNavigationProps {
  onSelect?: () => void;
}

export const SideNavigation = ({ onSelect }: SideNavigationProps) => {
  const { playroomUrl } = useConfig();

  const getBadge = (docs: any): BadgeLabel | undefined => {
    if (docs.deprecationWarning) {
      return 'Deprecated';
    }

    if (isNew(docs.name)) {
      return 'New';
    }
  };

  const { pathname: currentPath } = useLocation();
  const isActive = useMemo(
    () => (path: string) =>
      Boolean(matchPath({ path, end: false }, currentPath)),
    [currentPath],
  );

  const activeSection = navSections.find(({ pathPrefixes }) =>
    pathPrefixes.some((prefix) => currentPath.startsWith(prefix)),
  );

  // The landing page has no sidebar; its resource links are rendered on the
  // page itself (see routes/home).
  const isHome = currentPath === '/';

  return (
    <Box paddingTop="large">
      <Stack space="large">
        <Box display={{ mobile: 'block', wide: 'none' }}>
          <SideNavigationSection
            title="Navigation"
            hideTitle={true}
            items={navSections.map(({ label, href, pathPrefixes }) => ({
              name: label,
              path: href,
              active: pathPrefixes.some((prefix) =>
                currentPath.startsWith(prefix),
              ),
              onClick: onSelect,
            }))}
          />
        </Box>

        {!activeSection && !isHome && (
          <SideNavigationSection
            title="Resources"
            hideTitle={true}
            items={[
              {
                name: 'Releases',
                path: '/releases',
                active: isActive('/releases'),
                onClick: onSelect,
              },
              {
                name: 'Gallery',
                path: '/gallery',
              },
              {
                name: 'Playroom',
                path: playroomUrl,
              },
              {
                name: 'GitHub',
                path: 'https://github.com/seek-oss/braid-design-system',
              },
            ]}
          />
        )}

        {activeSection?.id === 'guides' && (
          <SideNavigationSection
            title="Guides"
            items={Object.entries(guides).map(([path, guide]) => ({
              name: guide.title,
              badge: guide.badge,
              path,
              active: isActive(path),
              onClick: onSelect,
            }))}
          />
        )}

        {activeSection?.id === 'foundations' && (
          <SideNavigationSection
            title="Foundations"
            items={foundationNavItems.map((item) => ({
              name: item.name,
              badge: item.badge,
              path: item.path,
              active: isActive(item.path),
              onClick: onSelect,
            }))}
          />
        )}

        {activeSection?.id === 'components' && (
          <>
            <SideNavigationSection
              title="Components"
              items={componentsList.map((docs) => ({
                name: docs.name,
                badge: getBadge(docs),
                path: `/components/${docs.name}`,
                active: isActive(`/components/${docs.name}`),
                onClick: onSelect,
              }))}
            />
            <SideNavigationSection
              title="Logic"
              items={categorisedComponents.Logic.map((docs) => ({
                name: docs.name,
                badge: getBadge(docs),
                path: `/components/${docs.name}`,
                active: isActive(`/components/${docs.name}`),
                onClick: onSelect,
              }))}
            />
          </>
        )}

        {activeSection?.id === 'patterns' && (
          <>
            <SideNavigationSection
              title="Patterns"
              items={patternNavItems.map(({ name, path }) => ({
                name,
                path,
                active: isActive(path),
                onClick: onSelect,
              }))}
            />
            <SideNavigationSection
              title="Templates"
              items={templateGroups.map((group) => ({
                name: group.at(0)?.toUpperCase() + group.slice(1),
                path: templateGroupPath(group.toLowerCase()),
                badge: 'New',
                active: isActive(templateGroupPath(group.toLowerCase())),
                onClick: onSelect,
              }))}
            />
            <SideNavigationSection
              title="How to"
              items={howToNavItems.map(({ name, path }) => ({
                name,
                path,
                active: isActive(path),
                onClick: onSelect,
              }))}
            />
          </>
        )}

        {activeSection?.id === 'styles' && (
          <SideNavigationSection
            title="CSS"
            items={documentedCss.map((doc) => ({
              name: doc.name,
              badge: getBadge(doc),
              path: `/css/${doc.name}`,
              active: isActive(`/css/${doc.name}`),
              onClick: onSelect,
            }))}
          />
        )}
      </Stack>
    </Box>
  );
};
