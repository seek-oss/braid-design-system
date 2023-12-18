import React, { useMemo } from 'react';
import map from 'lodash/map';
import guides from '../routes/guides';
import foundations from '../routes/foundations';
import examples from '../routes/examples';
import { Stack } from 'braid-src/lib/components';
import {
  categorisedComponents,
  documentedComponents,
  documentedCss,
} from '../navigationHelpers';
import { useConfig } from '../ConfigContext';
import { isNew } from '../Updates';
import { SideNavigationGroup } from '@braid-design-system/docs-ui';
import { matchPath, useLocation, useMatch } from 'react-router';

type BadgeLabel = 'New' | 'Deprecated';

const componentsList = documentedComponents.filter(
  ({ category }) => category !== 'Logic',
);

interface SubNavigationProps {
  onSelect?: () => void;
}

export const SubNavigation = ({ onSelect }: SubNavigationProps) => {
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
      Boolean(matchPath({ path, end: true }, currentPath)),
    [currentPath],
  );

  return (
    <Stack space="large">
      <SideNavigationGroup
        items={[
          {
            name: 'Releases',
            path: '/releases',
            active: Boolean(useMatch({ path: '/releases', end: true })),
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

      <SideNavigationGroup
        title="Guides"
        items={map(guides, (guide, path) => ({
          name: guide.title,
          badge: guide.badge,
          path,
          active: isActive(path),
          onClick: onSelect,
        }))}
      />

      <SideNavigationGroup
        title="Foundations"
        items={map(foundations, (foundation, path) => ({
          name: foundation.title,
          badge: foundation.badge,
          path,
          active: isActive(path),
          onClick: onSelect,
        }))}
      />

      <SideNavigationGroup
        title="Examples"
        items={map(examples, (example, path) => ({
          name: example.title,
          badge: example.badge,
          path,
          active: isActive(path),
          onClick: onSelect,
        }))}
      />

      <SideNavigationGroup
        title="Components"
        items={componentsList.map((docs) => ({
          name: docs.name,
          badge: getBadge(docs),
          path: `/components/${docs.name}`,
          active: isActive(`/components/${docs.name}`),
          onClick: onSelect,
        }))}
      />

      <SideNavigationGroup
        title="CSS"
        items={documentedCss.map((doc) => ({
          name: doc.name,
          badge: getBadge(doc),
          path: `/css/${doc.name}`,
          active: isActive(`/css/${doc.name}`),
          onClick: onSelect,
        }))}
      />

      <SideNavigationGroup
        title="Logic"
        items={categorisedComponents.Logic.map((docs) => ({
          name: docs.name,
          badge: getBadge(docs),
          path: `/components/${docs.name}`,
          active: isActive(`/components/${docs.name}`),
          onClick: onSelect,
        }))}
      />
    </Stack>
  );
};
