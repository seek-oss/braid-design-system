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
import foundations from '../routes/foundations';
import guides from '../routes/guides';
import patterns from '../routes/patterns';

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

  const patternEntries = Object.entries(patterns);

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

        {activeSection?.id === 'foundations' && (
          <>
            <SideNavigationSection
              title="Foundations"
              items={Object.entries(foundations).map(([path, foundation]) => ({
                name: foundation.title,
                badge: foundation.badge,
                path,
                active: isActive(path),
                onClick: onSelect,
              }))}
            />
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
          </>
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

        {activeSection?.id === 'patterns' && patternEntries.length > 0 && (
          <SideNavigationSection
            title="Patterns"
            items={patternEntries.map(([path, pattern]) => ({
              name: pattern.title,
              badge: pattern.badge,
              path,
              active: isActive(path),
              onClick: onSelect,
            }))}
          />
        )}

        {activeSection?.id === 'templates' && (
          <SideNavigationSection
            title="Templates"
            items={templateGroups.map((group) => ({
              name: group.at(0)?.toUpperCase() + group.slice(1),
              path: `/templates/${group.toLowerCase()}`,
              badge: 'New',
              active: isActive(`/templates/${group.toLowerCase()}`),
              onClick: onSelect,
            }))}
          />
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
