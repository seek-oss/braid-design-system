import { SideNavigationSection } from '@braid-design-system/docs-ui';
import { Box, Stack } from 'braid-design-system';
import { useCallback, useMemo, useState } from 'react';
import { useLocation } from 'react-router';

import { useConfig } from '../ConfigContext';
import { isNew } from '../Updates';
import {
  allTemplateDocs,
  categorisedComponents,
  documentedComponents,
  documentedCss,
} from '../navigationHelpers';
import {
  type NavSectionId,
  getActiveSection,
  isNavItemActive,
  navSections,
} from '../navigationSections';
import { foundationNavItems } from '../routes/foundations';
import guides from '../routes/guides';
import { howToNavItems, patternNavItems } from '../routes/patterns';
import { templateGroupPath } from '../routes/templates/templateDocs';

import { SectionToggle } from './SectionToggle';

type BadgeLabel = 'New' | 'Deprecated';

const componentsList = documentedComponents.filter(
  ({ category }) => category !== 'Logic',
);

const templateGroups = [...new Set(allTemplateDocs.map((doc) => doc.group))];

interface SideNavigationItemData {
  name: string;
  badge?: BadgeLabel;
  path: string;
  active?: boolean;
  onClick?: () => void;
}

interface SectionGroup {
  title: string;
  items: SideNavigationItemData[];
}

interface SideNavigationProps {
  onSelect?: () => void;
  menuOpen?: boolean;
  /**
   * Whether the side navigation is rendering as the persistent wide column
   * rather than the mobile menu. Only one of the two trees is mounted.
   */
  wideLayout?: boolean;
}
interface ExpandedSections {
  key: string;
  overrides: Partial<Record<NavSectionId, boolean>>;
}

const getBadge = (docs: {
  deprecationWarning?: unknown;
  name: string;
}): BadgeLabel | undefined => {
  if (docs.deprecationWarning) {
    return 'Deprecated';
  }

  if (isNew(docs.name)) {
    return 'New';
  }
};

export const SideNavigation = ({
  onSelect,
  menuOpen = false,
  wideLayout = true,
}: SideNavigationProps) => {
  const { playroomUrl } = useConfig();
  const { pathname: currentPath } = useLocation();
  const menuSessionKey = `${currentPath}:${menuOpen}`;
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    key: menuSessionKey,
    overrides: {},
  });

  const isActive = useCallback(
    (path: string) => isNavItemActive(currentPath, path),
    [currentPath],
  );

  const activeSection = getActiveSection(currentPath);
  const activeSectionId = activeSection?.id;

  const isHome = currentPath === '/';

  const sectionGroups: Record<NavSectionId, SectionGroup[]> = useMemo(
    () => ({
      guides: [
        {
          title: 'Guides',
          items: Object.entries(guides).map(([path, guide]) => ({
            name: guide.title,
            badge: guide.badge,
            path,
            active: isActive(path),
            onClick: onSelect,
          })),
        },
      ],
      foundations: [
        {
          title: 'Foundations',
          items: foundationNavItems.map((item) => ({
            name: item.name,
            badge: item.badge,
            path: item.path,
            active: isActive(item.path),
            onClick: onSelect,
          })),
        },
      ],
      components: [
        {
          title: 'Components',
          items: componentsList.map((docs) => ({
            name: docs.name,
            badge: getBadge(docs),
            path: `/components/${docs.name}`,
            active: isActive(`/components/${docs.name}`),
            onClick: onSelect,
          })),
        },
        {
          title: 'Logic',
          items: categorisedComponents.Logic.map((docs) => ({
            name: docs.name,
            badge: getBadge(docs),
            path: `/components/${docs.name}`,
            active: isActive(`/components/${docs.name}`),
            onClick: onSelect,
          })),
        },
      ],
      patterns: [
        {
          title: 'Patterns',
          items: patternNavItems.map(({ name, path }) => ({
            name,
            path,
            active: isActive(path),
            onClick: onSelect,
          })),
        },
        {
          title: 'Templates',
          items: templateGroups.map((group) => ({
            name: group.at(0)?.toUpperCase() + group.slice(1),
            path: templateGroupPath(group.toLowerCase()),
            badge: 'New' as const,
            active: isActive(templateGroupPath(group.toLowerCase())),
            onClick: onSelect,
          })),
        },
        {
          title: 'How to',
          items: howToNavItems.map(({ name, path }) => ({
            name,
            path,
            active: isActive(path),
            onClick: onSelect,
          })),
        },
      ],
      styles: [
        {
          title: 'CSS',
          items: documentedCss.map((doc) => ({
            name: doc.name,
            badge: getBadge(doc),
            path: `/css/${doc.name}`,
            active: isActive(`/css/${doc.name}`),
            onClick: onSelect,
          })),
        },
      ],
    }),
    [isActive, onSelect],
  );

  const overrides =
    expandedSections.key === menuSessionKey ? expandedSections.overrides : {};

  const isExpanded = (id: NavSectionId) =>
    overrides[id] ?? id === activeSectionId;

  const toggleSection = (id: NavSectionId) =>
    setExpandedSections({
      key: menuSessionKey,
      overrides: { ...overrides, [id]: !isExpanded(id) },
    });

  return (
    <Box paddingTop="large">
      <Stack space="large">
        {!wideLayout && (
          <Stack space="small">
            {navSections.map((section) => {
              const expanded = isExpanded(section.id);
              const panelId = `sidenav-section-${section.id}`;
              const [firstGroup, ...nestedGroups] = sectionGroups[section.id];

              return (
                <Box key={section.id}>
                  <SectionToggle
                    label={section.label}
                    expanded={expanded}
                    controls={panelId}
                    onClick={() => toggleSection(section.id)}
                  />
                  {expanded ? (
                    <Box id={panelId} paddingLeft="medium" paddingTop="xsmall">
                      <Stack space="large">
                        <SideNavigationSection
                          title={firstGroup.title}
                          hideTitle
                          items={[
                            {
                              name: 'Overview',
                              path: section.href,
                              active: isNavItemActive(
                                currentPath,
                                section.href,
                                { exact: true },
                              ),
                              onClick: onSelect,
                            },
                            ...firstGroup.items,
                          ]}
                        />
                        {nestedGroups.map((group) => (
                          <SideNavigationSection
                            key={group.title}
                            title={group.title}
                            items={group.items}
                          />
                        ))}
                      </Stack>
                    </Box>
                  ) : null}
                </Box>
              );
            })}
          </Stack>
        )}

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

        {wideLayout && activeSection ? (
          <Stack space="large">
            {sectionGroups[activeSection.id].map((group) => (
              <SideNavigationSection
                key={group.title}
                title={group.title}
                items={group.items}
              />
            ))}
          </Stack>
        ) : null}
      </Stack>
    </Box>
  );
};
