import React from 'react';
import map from 'lodash/map';
import guides from '../routes/guides';
import foundations from '../routes/foundations';
import { Text, Box, Stack } from '../../../../lib/components';
import { Link, ExternalLink } from '../Link/Link';
import { ThemeToggle } from '../ThemeSetting';
import {
  categorisedComponents,
  documentedComponents,
} from '../navigationHelpers';
import { useConfig } from '../ConfigContext';

interface SubNavigationItem {
  name: string;
  path: string;
  external: boolean;
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
        {items.map(({ name, path, external, onClick }) => (
          <Text key={name}>
            {external ? (
              <ExternalLink href={path} onClick={onClick} hitArea="large">
                {name}
              </ExternalLink>
            ) : (
              <Link to={path} onClick={onClick} hitArea="large">
                {name}
              </Link>
            )}
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
            external: true,
          },
          {
            name: 'Playroom',
            path: playroomUrl,
            external: true,
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
