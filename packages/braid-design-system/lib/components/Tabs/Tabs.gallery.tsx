import React from 'react';
import { ComponentExample } from '../../../../../site/src/types';
import {
  Stack,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  TabsProvider,
  Badge,
  Card,
  IconCompany,
  IconHome,
  IconRecommended,
} from '..';
import { Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Left aligned',
    Example: ({ id }) =>
      source(
        <Card>
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
          </TabsProvider>
        </Card>,
      ),
  },
  {
    label: 'Center aligned',
    Example: ({ id }) =>
      source(
        <Card>
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
          </TabsProvider>
        </Card>,
      ),
  },
  {
    label: 'With gutter',
    Example: ({ id }) =>
      source(
        <TabsProvider id={id}>
          <Tabs label="Test tabs" gutter="gutter" divider="none">
            <Tab>The first tab</Tab>
            <Tab>The second tab</Tab>
            <Tab>The third tab</Tab>
          </Tabs>
          <Card>
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
          </Card>
        </TabsProvider>,
      ),
  },
  {
    label: 'Full width divider',
    Example: ({ id }) =>
      source(
        <Card>
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
          </TabsProvider>
        </Card>,
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
          <Card>
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
          </Card>
        </TabsProvider>,
      ),
  },
  {
    label: 'With a badge',
    Example: ({ id }) =>
      source(
        <Card>
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
          </TabsProvider>
        </Card>,
      ),
  },
  {
    label: 'With an icon',
    Example: ({ id }) =>
      source(
        <Card>
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
          </TabsProvider>
        </Card>,
      ),
  },
];
