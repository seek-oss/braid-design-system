import React from 'react';
import { useMatch } from 'react-router';
import map from 'lodash/map';
import guides from '../routes/guides';
import foundations from '../routes/foundations';
import examples from '../routes/examples';
import {
  Text,
  ButtonLink,
  Box,
  Stack,
  Inline,
  Badge,
  Bleed,
} from 'braid-src/lib/components';
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

const SubNavItem = ({
  name,
  badge,
  path,
  onClick,
  target,
}: SubNavigationItem) => {
  const active = useMatch({ path, end: true });

  return (
    <Inline space="medium" alignY="center">
      <Bleed horizontal="small">
        <ButtonLink
          variant={active ? 'soft' : 'transparent'}
          tone="formAccent"
          size="small"
          href={path}
          onClick={onClick}
          target={target}
        >
          {name}
        </ButtonLink>
      </Bleed>
      {badge ? (
        <Badge bleedY tone={toneForBadge(badge)}>
          {badge}
        </Badge>
      ) : null}
    </Inline>
  );
};

interface SubNavigationGroup {
  title?: string;
  items: SubNavigationItem[];
}

const SubNavigationGroup = ({ title, items }: SubNavigationGroup) => (
  <Box component="nav">
    <Stack space="small">
      {title ? (
        <Box className={styles.uppercase}>
          <Text size="xsmall" weight="medium" component="h2">
            {title}
          </Text>
        </Box>
      ) : null}

      <Stack component="ul" space="none">
        {items.map(({ name, badge, path, onClick, target }) => (
          <SubNavItem
            name={name}
            badge={badge}
            path={path}
            onClick={onClick}
            target={target}
            key={name}
          />
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
    <Stack space="large">
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
