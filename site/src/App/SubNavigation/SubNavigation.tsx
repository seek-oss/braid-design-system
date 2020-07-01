import React from 'react';
import map from 'lodash/map';
import { useStyles } from 'sku/react-treat';
import guides from '../routes/guides';
import foundations from '../routes/foundations';
import examples from '../routes/examples';
import { Text, TextLink, Box, Stack } from '../../../../lib/components';
import { ThemeToggle } from '../ThemeSetting';
import {
  categorisedComponents,
  documentedComponents,
} from '../navigationHelpers';
import { useConfig } from '../ConfigContext';
import * as styleRefs from './SubNavigation.treat';

interface SubNavigationItem {
  name: string;
  path: string;
  onClick?: () => void;
}

interface SubNavigationGroup {
  title: string;
  items: SubNavigationItem[];
}

const SubNavigationGroup = ({ title, items }: SubNavigationGroup) => {
  const styles = useStyles(styleRefs);

  return (
    <Box component="nav">
      <Stack space="large">
        <Box className={styles.uppercase}>
          <Text size="xsmall" weight="medium" component="h2">
            {title}
          </Text>
        </Box>

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
};

interface SubNavigationProps {
  onSelect?: () => void;
}
export const SubNavigation = ({ onSelect }: SubNavigationProps) => {
  const { playroomUrl } = useConfig();

  return (
    <Stack space="xlarge">
      <ThemeToggle />

      <SubNavigationGroup
        title="Tools"
        items={[
          {
            name: 'GitHub',
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
          items={categorisedComponents[category].map(({ name }) => ({
            name,
            path: `/components/${name}`,
            onClick: onSelect,
          }))}
        />
      ))}

      <SubNavigationGroup
        title="All Components"
        items={documentedComponents.map((componentName) => ({
          name: componentName,
          path: `/components/${componentName}`,
          onClick: onSelect,
        }))}
      />
    </Stack>
  );
};
