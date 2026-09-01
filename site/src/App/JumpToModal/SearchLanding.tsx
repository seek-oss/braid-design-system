import { SideNavigationSection } from '@braid-design-system/docs-ui';
import { Box, Column, Columns, Stack } from 'braid-design-system';

import { gettingStartedLinks } from '../gettingStartedLinks';

export const SearchLanding = () => (
  <Box height="full" paddingX="gutter" paddingY="xlarge">
    <Columns space="gutter" alignY="top">
      <Column>
        <Stack space="xlarge">
          <SideNavigationSection
            title="Getting Started"
            items={gettingStartedLinks.map(({ href, label }) => ({
              name: label,
              path: href,
            }))}
          />
          <SideNavigationSection
            title="Foundations"
            items={[
              {
                name: 'Tokens',
                path: '/foundations/tokens',
              },
              {
                name: 'Layout',
                path: '/foundations/layout',
              },
              {
                name: 'Iconography',
                path: '/foundations/iconography',
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
            },
            {
              name: 'Patterns',
              path: '/patterns',
            },
            {
              name: 'Styles',
              path: '/css',
            },
          ]}
        />
      </Column>
    </Columns>
  </Box>
);
