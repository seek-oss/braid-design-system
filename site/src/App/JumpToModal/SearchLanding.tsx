import { SideNavigationSection } from '@braid-design-system/docs-ui';
import { Box, Column, Columns, Stack } from 'braid-design-system';

import { gettingStartedLinks } from '../gettingStartedLinks';

interface SearchLandingProps {
  onSelect: () => void;
}

export const SearchLanding = ({ onSelect }: SearchLandingProps) => (
  <Box height="full" paddingX="gutter" paddingY="xlarge">
    <Columns space="gutter" alignY="top">
      <Column>
        <Stack space="xlarge">
          <SideNavigationSection
            title="Getting Started"
            items={gettingStartedLinks.map(({ href, label }) => ({
              name: label,
              path: href,
              onClick: onSelect,
            }))}
          />
          <SideNavigationSection
            title="Foundations"
            items={[
              {
                name: 'Tokens',
                path: '/foundations/tokens',
                onClick: onSelect,
              },
              {
                name: 'Layout',
                path: '/foundations/layout',
                onClick: onSelect,
              },
              {
                name: 'Iconography',
                path: '/foundations/iconography',
                onClick: onSelect,
              },
            ]}
          />
        </Stack>
      </Column>
      <Column>
        <SideNavigationSection
          title="Frequently used"
          items={[
            {
              name: 'Components',
              path: '/components',
              onClick: onSelect,
            },
            {
              name: 'Patterns',
              path: '/patterns',
              onClick: onSelect,
            },
            {
              name: 'Styles',
              path: '/css',
              onClick: onSelect,
            },
          ]}
        />
      </Column>
    </Columns>
  </Box>
);
