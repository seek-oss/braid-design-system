import React from 'react';
import map from 'lodash/map';
import guides from '../routes/guides';
import foundations from '../routes/foundations';
import examples from '../routes/examples';
import {
  Text,
  TextLink,
  Box,
  Stack,
  Inline,
  Badge,
} from '../../../../lib/components';
import { ThemeToggle } from '../ThemeSetting';
import {
  categorisedComponents,
  documentedComponents,
  documentedCss,
} from '../navigationHelpers';
import { useConfig } from '../ConfigContext';
import { isNew } from '../Updates';
import * as styles from './SubNavigation.css';

type BadgeLabel = 'New' | 'Deprecated';

const toneForBadge = (badgeLabel: BadgeLabel) => {
  const toneMap = {
    Deprecated: 'caution',
    New: 'positive',
  } as const;

  return toneMap[badgeLabel];
};

const componentsList = documentedComponents.filter(
  ({ category }) => category !== 'Logic',
);

interface SubNavigationItem {
  badge?: BadgeLabel;
  name: string;
  path: string;
  onClick?: () => void;
  target?: string;
}

interface SubNavigationGroup {
  title?: string;
  items: SubNavigationItem[];
}

const SubNavigationGroup = ({ title, items }: SubNavigationGroup) => (
  <Box component="nav">
    <Stack space="large">
      {title ? (
        <Box className={styles.uppercase}>
          <Text size="xsmall" weight="medium" component="h2">
            {title}
          </Text>
        </Box>
      ) : null}

      <Stack component="ul" space="medium">
        {items.map(({ name, badge, path, onClick, target }) => (
          <Inline space="xsmall" alignY="center" key={name}>
            <Text>
              <TextLink
                href={path}
                onClick={onClick}
                hitArea="large"
                target={target}
              >
                {name}
              </TextLink>
            </Text>
            {badge ? (
              <Badge bleedY tone={toneForBadge(badge)}>
                {badge}
              </Badge>
            ) : null}
          </Inline>
        ))}
      </Stack>
    </Stack>
  </Box>
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

  return (
    <Stack space="xlarge">
      <ThemeToggle />

      <SubNavigationGroup
        items={[
          {
            name: 'Releases',
            path: '/releases',
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

      <SubNavigationGroup
        title="Guides"
        items={map(guides, (guide, path) => ({
          name: guide.title,
          badge: guide.badge,
          path,
          onClick: onSelect,
        }))}
      />

      <SubNavigationGroup
        title="Foundations"
        items={map(foundations, (foundation, path) => ({
          name: foundation.title,
          badge: foundation.badge,
          path,
          onClick: onSelect,
        }))}
      />

      <SubNavigationGroup
        title="Examples"
        items={map(examples, (example, path) => ({
          name: example.title,
          badge: example.badge,
          path,
          onClick: onSelect,
        }))}
      />

      <SubNavigationGroup
        title="Components"
        items={componentsList.map((docs) => ({
          name: docs.name,
          badge: getBadge(docs),
          path: `/components/${docs.name}`,
          onClick: onSelect,
        }))}
      />

      <SubNavigationGroup
        title="CSS"
        items={documentedCss.map((doc) => ({
          name: doc.name,
          badge: getBadge(doc),
          path: `/css/${doc.name}`,
          onClick: onSelect,
        }))}
      />

      <SubNavigationGroup
        title="Logic"
        items={categorisedComponents.Logic.map((docs) => ({
          name: docs.name,
          badge: getBadge(docs),
          path: `/components/${docs.name}`,
          onClick: onSelect,
        }))}
      />
    </Stack>
  );
};
