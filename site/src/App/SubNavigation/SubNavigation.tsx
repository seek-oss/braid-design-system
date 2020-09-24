import React from 'react';
import map from 'lodash/map';
import { useStyles } from 'sku/react-treat';
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
} from '../navigationHelpers';
import { useConfig } from '../ConfigContext';
import * as styleRefs from './SubNavigation.treat';
import { isNew } from '../Updates';

type BadgeLabel = 'New' | 'Deprecated';

const toneForBadge = (badgeLabel: BadgeLabel) => {
  const toneMap = {
    Deprecated: 'caution',
    New: 'positive',
  } as const;

  return toneMap[badgeLabel];
};

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

const SubNavigationGroup = ({ title, items }: SubNavigationGroup) => {
  const styles = useStyles(styleRefs);

  return (
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
};

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
            badge: 'New',
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
          path,
          onClick: onSelect,
        }))}
      />

      <SubNavigationGroup
        title="Foundations"
        items={map(foundations, (foundation, path) => ({
          name: foundation.title,
          path,
          onClick: onSelect,
        }))}
      />

      <SubNavigationGroup
        title="Examples"
        items={map(examples, (example, path) => ({
          name: example.title,
          path,
          onClick: onSelect,
        }))}
      />

      {['Layout', 'Content', 'Logic'].map((category) => (
        <SubNavigationGroup
          key={category}
          title={category}
          items={categorisedComponents[category].map((docs) => ({
            name: docs.name,
            badge: getBadge(docs),
            path: `/components/${docs.name}`,
            onClick: onSelect,
          }))}
        />
      ))}

      <SubNavigationGroup
        title="All Components"
        items={documentedComponents.map((docs) => ({
          name: docs.name,
          badge: getBadge(docs),
          path: `/components/${docs.name}`,
          onClick: onSelect,
        }))}
      />
    </Stack>
  );
};
