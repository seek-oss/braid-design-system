import React from 'react';
import map from 'lodash/map';
import guides from '../routes/guides';
import foundations from '../routes/foundations';
import { Text, TextLink, Box, Stack } from '../../../../lib/components';
import { ThemeToggle } from '../ThemeSetting';
import {
  categorisedComponents,
  documentedComponents,
} from '../navigationHelpers';
import { useConfig } from '../ConfigContext';

interface SubNavigationItem {
  name: string;
  path: string;
  onClick?: () => void;
}

interface SubNavigationGroup {
  title: string;
  items: SubNavigationItem[];
}

const SubNavigationGroup = ({ title, items }: SubNavigationGroup) => (
  <Box component="nav">
    <Stack space="medium">
      <Text weight="strong" component="h2">
        {title}
      </Text>

      <Stack component="ul" space="medium">
        {items.map(({ name, path, onClick }) => (
          <Text key={name}>
            <TextLink href={path} onClick={onClick} hitArea="large">
              {name}
            </TextLink>
          </Text>
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

  return (
    <Stack space="xlarge">
      <Stack space="medium">
        <Text weight="strong" component="h2">
          Theme
        </Text>
        <ThemeToggle />
      </Stack>

      <SubNavigationGroup
        title="Tools"
        items={[
          {
            name: 'Source',
            path: 'https://github.com/seek-oss/braid-design-system',
          },
          {
            name: 'Playroom',
            path: playroomUrl,
          },
        ]}
      />

      <SubNavigationGroup
        title="Guides"
        items={map(guides, (guide, path) => ({
          name: guide.title,
          path,
          external: false,
          onClick: onSelect,
        }))}
      />

      <SubNavigationGroup
        title="Foundations"
        items={map(foundations, (foundation, path) => ({
          name: foundation.title,
          path,
          external: false,
          onClick: onSelect,
        }))}
      />

      {['Layout', 'Content', 'Interaction', 'Logic'].map(category => (
        <SubNavigationGroup
          key={category}
          title={category}
          items={categorisedComponents[category].map(({ name }) => ({
            name,
            path: `/components/${name}`,
            external: false,
            onClick: onSelect,
          }))}
        />
      ))}

      <SubNavigationGroup
        title="All Components"
        items={documentedComponents.map(componentName => ({
          name: componentName,
          path: `/components/${componentName}`,
          external: false,
          onClick: onSelect,
        }))}
      />
    </Stack>
  );
};
