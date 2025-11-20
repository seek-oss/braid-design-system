import { SideNavigationSection } from '@braid-design-system/docs-ui';
import {
  Accordion,
  AccordionItem,
  Stack,
  Text,
} from 'braid-src/lib/components';
import { useMemo } from 'react';
import { matchPath, useLocation } from 'react-router';

import { useConfig } from '../ConfigContext';
import { isNew } from '../Updates';
import {
  categorisedComponents,
  documentedComponents,
  documentedCss,
} from '../navigationHelpers';
import examples from '../routes/examples';
import foundations from '../routes/foundations';
import guides from '../routes/guides';

type BadgeLabel = 'New' | 'Deprecated';

const componentsList = documentedComponents.filter(
  ({ category }) => category !== 'Logic',
);

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
      Boolean(matchPath({ path, end: true }, currentPath)),
    [currentPath],
  );

  return (
    <Accordion size="standard">
      <AccordionItem label="Getting started">
        <Stack space="large">
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

          <SideNavigationSection
            title="Examples"
            items={Object.entries(examples).map(([path, example]) => ({
              name: example.title,
              badge: example.badge,
              path,
              active: isActive(path),
              onClick: onSelect,
            }))}
          />
        </Stack>
      </AccordionItem>

      <AccordionItem label="Foundations">
        <SideNavigationSection
          title="Foundations"
          hideTitle={true}
          items={Object.entries(foundations).map(([path, foundation]) => ({
            name: foundation.title,
            badge: foundation.badge,
            path,
            active: isActive(path),
            onClick: onSelect,
          }))}
        />
      </AccordionItem>

      <AccordionItem label="Components">
        <SideNavigationSection
          title="Components"
          hideTitle={true}
          items={componentsList.map((docs) => ({
            name: docs.name,
            badge: getBadge(docs),
            path: `/components/${docs.name}`,
            active: isActive(`/components/${docs.name}`),
            onClick: onSelect,
          }))}
        />
      </AccordionItem>

      <AccordionItem label="Patterns">
        <Text>Coming soon!</Text>
      </AccordionItem>

      <AccordionItem label="Development tools">
        <Stack space="large">
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
        </Stack>
      </AccordionItem>
    </Accordion>
  );
};
