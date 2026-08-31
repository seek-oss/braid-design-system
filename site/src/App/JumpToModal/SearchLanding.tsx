import { SideNavigationSection } from '@braid-design-system/docs-ui';
import { Box, Column, Columns, Stack } from 'braid-design-system';

export const SearchLanding = () => (
  <Box height="full" paddingX="gutter" paddingY="xlarge">
    <Columns space="gutter" alignY="top">
      <Column>
        <Stack space="xlarge">
          <SideNavigationSection
            title="Getting Started"
            items={[
              {
                name: 'Tutorial',
                path: '/getting-started/job-summary',
              },
              {
                name: 'Start designing',
                path: '/design-workflow',
              },
              {
                name: 'Start developing',
                path: '/development-workflow',
              },
            ]}
          />
          <SideNavigationSection
            title="Foundations"
            items={[
              {
                name: 'Tokens',
                path: '/tokens',
              },
              {
                name: 'Layout',
                path: '/layout',
              },
              {
                name: 'Iconography',
                path: '/iconography',
              },
            ]}
          />
        </Stack>
      </Column>
      <Column>
        <Stack space="xlarge">
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
                path: '/styles',
              },
            ]}
          />
          <SideNavigationSection
            title="Foundations"
            items={[
              {
                name: 'Tokens',
                path: '/tokens',
              },
              {
                name: 'Layout',
                path: '/layout',
              },
              {
                name: 'Iconography',
                path: '/iconography',
              },
            ]}
          />
        </Stack>
      </Column>
    </Columns>
  </Box>
);
