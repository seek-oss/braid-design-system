import React from 'react';
import type { GalleryComponent } from 'site/types';
import {
  Stack,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  TabsProvider,
  Badge,
  IconCompany,
  IconHome,
  IconRecommended,
} from '..';
import { Placeholder } from '../../playroom/components';
import source from '@braid-design-system/source.macro';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Align left',
      Example: ({ id }) =>
        source(
          <TabsProvider id={id}>
            <Stack space="medium">
              <Tabs label="Test tabs">
                <Tab>The first tab</Tab>
                <Tab>The second tab</Tab>
                <Tab>The third tab</Tab>
              </Tabs>
              <TabPanels>
                <TabPanel>
                  <Placeholder height={100} label="Panel 1" />
                </TabPanel>
                <TabPanel>
                  <Placeholder height={100} label="Panel 2" />
                </TabPanel>
                <TabPanel>
                  <Placeholder height={100} label="Panel 3" />
                </TabPanel>
              </TabPanels>
            </Stack>
          </TabsProvider>,
        ),
    },
    {
      label: 'Align center',
      Example: ({ id }) =>
        source(
          <TabsProvider id={id}>
            <Stack space="medium">
              <Tabs label="Test tabs" align="center">
                <Tab>The first tab</Tab>
                <Tab>The second tab</Tab>
              </Tabs>
              <TabPanels>
                <TabPanel>
                  <Placeholder height={100} label="Panel 1" />
                </TabPanel>
                <TabPanel>
                  <Placeholder height={100} label="Panel 2" />
                </TabPanel>
              </TabPanels>
            </Stack>
          </TabsProvider>,
        ),
    },
    {
      label: 'Full width divider',
      Example: ({ id }) =>
        source(
          <TabsProvider id={id}>
            <Stack space="medium">
              <Tabs label="Test tabs" divider="full">
                <Tab>The first tab</Tab>
                <Tab>The second tab</Tab>
              </Tabs>
              <TabPanels>
                <TabPanel>
                  <Placeholder height={100} label="Panel 1" />
                </TabPanel>
                <TabPanel>
                  <Placeholder height={100} label="Panel 2" />
                </TabPanel>
              </TabPanels>
            </Stack>
          </TabsProvider>,
        ),
    },
    {
      label: 'No divider',
      Example: ({ id }) =>
        source(
          <TabsProvider id={id}>
            <Tabs label="Test tabs" divider="none">
              <Tab>The first tab</Tab>
              <Tab>The second tab</Tab>
              <Tab>The third tab</Tab>
            </Tabs>
            <TabPanels>
              <TabPanel>
                <Placeholder height={100} label="Panel 1" />
              </TabPanel>
              <TabPanel>
                <Placeholder height={100} label="Panel 2" />
              </TabPanel>
              <TabPanel>
                <Placeholder height={100} label="Panel 3" />
              </TabPanel>
            </TabPanels>
          </TabsProvider>,
        ),
    },
    {
      label: 'With a badge',
      Example: ({ id }) =>
        source(
          <TabsProvider id={id}>
            <Stack space="medium">
              <Tabs label="Test tabs">
                <Tab>The first tab</Tab>
                <Tab>The second tab</Tab>
                <Tab badge={<Badge tone="positive">New</Badge>}>
                  The third tab
                </Tab>
              </Tabs>
              <TabPanels>
                <TabPanel>
                  <Placeholder height={100} label="Panel 1" />
                </TabPanel>
                <TabPanel>
                  <Placeholder height={100} label="Panel 2" />
                </TabPanel>
                <TabPanel>
                  <Placeholder height={100} label="Panel 3" />
                </TabPanel>
              </TabPanels>
            </Stack>
          </TabsProvider>,
        ),
    },
    {
      label: 'With an icon',
      Example: ({ id }) =>
        source(
          <TabsProvider id={id}>
            <Stack space="medium">
              <Tabs label="Test tabs">
                <Tab icon={<IconHome />}>The first tab</Tab>
                <Tab icon={<IconRecommended />}>The second tab</Tab>
                <Tab icon={<IconCompany />}>The third tab</Tab>
              </Tabs>
              <TabPanels>
                <TabPanel>
                  <Placeholder height={100} label="Panel 1" />
                </TabPanel>
                <TabPanel>
                  <Placeholder height={100} label="Panel 2" />
                </TabPanel>
                <TabPanel>
                  <Placeholder height={100} label="Panel 3" />
                </TabPanel>
              </TabPanels>
            </Stack>
          </TabsProvider>,
        ),
    },
    {
      label: 'Size small',
      Example: ({ id }) =>
        source(
          <TabsProvider id={id}>
            <Stack space="medium">
              <Tabs label="Test tabs" size="small">
                <Tab>First Tab</Tab>
                <Tab>Second Tab</Tab>
                <Tab>The third tab</Tab>
              </Tabs>
              <TabPanels>
                <TabPanel>
                  <Placeholder height={100} label="Panel 1" />
                </TabPanel>
                <TabPanel>
                  <Placeholder height={100} label="Panel 2" />
                </TabPanel>
                <TabPanel>
                  <Placeholder height={100} label="Panel 3" />
                </TabPanel>
              </TabPanels>
            </Stack>
          </TabsProvider>,
        ),
    },
  ],
};
