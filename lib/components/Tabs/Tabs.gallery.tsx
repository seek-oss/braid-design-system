import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import {
  Stack,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  TabsProvider,
  Badge,
  Card,
} from '..';
import { Placeholder } from '../../playroom/components';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Left aligned',
    Example: ({ id }) => (
      <Card>
        <TabsProvider id={id}>
          <Stack space="medium">
            <Tabs label="Test tabs">
              <Tab>The first tab</Tab>
              <Tab>The second tab</Tab>
              <Tab>The third tab</Tab>
              <Tab badge={<Badge tone="positive">New</Badge>}>
                The fourth tab
              </Tab>
            </Tabs>
            <TabPanels>
              <TabPanel>
                <Placeholder height={200} label="Panel 1" />
              </TabPanel>
              <TabPanel>
                <Placeholder height={200} label="Panel 2" />
              </TabPanel>
              <TabPanel>
                <Placeholder height={200} label="Panel 3" />
              </TabPanel>
              <TabPanel>
                <Placeholder height={200} label="Panel 4" />
              </TabPanel>
            </TabPanels>
          </Stack>
        </TabsProvider>
      </Card>
    ),
  },
  {
    label: 'Center aligned',
    Example: ({ id }) => (
      <Card>
        <TabsProvider id={id}>
          <Stack space="medium">
            <Tabs label="Test tabs" align="center">
              <Tab>The first tab</Tab>
              <Tab>The second tab</Tab>
            </Tabs>
            <TabPanels>
              <TabPanel>
                <Placeholder height={200} label="Panel 1" />
              </TabPanel>
              <TabPanel>
                <Placeholder height={200} label="Panel 2" />
              </TabPanel>
            </TabPanels>
          </Stack>
        </TabsProvider>
      </Card>
    ),
  },
  {
    label: 'With gutter',
    Example: ({ id }) => (
      <TabsProvider id={id}>
        <Tabs label="Test tabs" gutter="gutter">
          <Tab>The first tab</Tab>
          <Tab>The second tab</Tab>
          <Tab>The third tab</Tab>
          <Tab>The fourth tab</Tab>
        </Tabs>
        <Card>
          <TabPanels>
            <TabPanel>
              <Placeholder height={200} label="Panel 1" />
            </TabPanel>
            <TabPanel>
              <Placeholder height={200} label="Panel 2" />
            </TabPanel>
            <TabPanel>
              <Placeholder height={200} label="Panel 3" />
            </TabPanel>
            <TabPanel>
              <Placeholder height={200} label="Panel 4" />
            </TabPanel>
          </TabPanels>
        </Card>
      </TabsProvider>
    ),
  },
  {
    label: 'With a Badge',
    Example: ({ id }) => (
      <Card>
        <TabsProvider id={id}>
          <Stack space="medium">
            <Tabs label="Test tabs">
              <Tab>The first tab</Tab>
              <Tab badge={<Badge tone="positive">Positive</Badge>}>
                The second tab
              </Tab>
              <Tab>The third tab</Tab>
              <Tab>The fourth tab</Tab>
            </Tabs>
            <TabPanels>
              <TabPanel>
                <Placeholder height={200} label="Panel 1" />
              </TabPanel>
              <TabPanel>
                <Placeholder height={200} label="Panel 2" />
              </TabPanel>
              <TabPanel>
                <Placeholder height={200} label="Panel 3" />
              </TabPanel>
              <TabPanel>
                <Placeholder height={200} label="Panel 4" />
              </TabPanel>
            </TabPanels>
          </Stack>
        </TabsProvider>
      </Card>
    ),
  },
];
