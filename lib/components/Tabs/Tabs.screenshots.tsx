import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import {
  Stack,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  TabsProvider,
  Badge,
  Card,
  Box,
} from '..';
import { Placeholder } from '../../playroom/components';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 1200],
  examples: [
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
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
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
      label: 'With gutter and reserved hit area',
      Example: ({ id }) => (
        <TabsProvider id={id}>
          <Tabs label="Test tabs" gutter="gutter" reserveHitArea>
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
      label:
        'Test: Center aligned tabs should be left aligned on mobile when content is too wide',
      Example: ({ id }) => (
        <TabsProvider id={id}>
          <Stack space="medium">
            <Tabs label="Test tabs" align="center">
              <Tab>The first tab</Tab>
              <Tab>The second tab</Tab>
              <Tab>The third tab</Tab>
              <Tab>The fourth tab</Tab>
              <Tab>The fifth tab</Tab>
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
              <TabPanel>
                <Placeholder height={200} label="Panel 5" />
              </TabPanel>
            </TabPanels>
          </Stack>
        </TabsProvider>
      ),
    },
    {
      label: 'Test: Selected tab should be scrolled into view on load',
      Example: ({ id }) => (
        <TabsProvider id={id} selectedItem="4">
          <Stack space="medium">
            <Tabs label="Test tabs" align="center">
              <Tab item="1">The first tab</Tab>
              <Tab item="2">The second tab</Tab>
              <Tab item="3">The third tab</Tab>
              <Tab item="4">The fourth tab</Tab>
              <Tab item="5">The fifth tab</Tab>
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
              <TabPanel>
                <Placeholder height={200} label="Panel 5" />
              </TabPanel>
            </TabPanels>
          </Stack>
        </TabsProvider>
      ),
    },
    {
      label:
        'Test: Selected tab with gutter should be scrolled into view on load',
      Container: ({ children }) => (
        <Box style={{ background: useBraidTheme().color.background.body }}>
          {children}
        </Box>
      ),
      Example: ({ id }) => (
        <TabsProvider id={id} selectedItem="3">
          <Tabs label="Test tabs" align="center" gutter="gutter" reserveHitArea>
            <Tab item="1">The first tab</Tab>
            <Tab item="2">The second tab</Tab>
            <Tab item="3">The third tab</Tab>
            <Tab item="4">The fourth tab</Tab>
            <Tab item="5">The fifth tab</Tab>
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
              <TabPanel>
                <Placeholder height={200} label="Panel 5" />
              </TabPanel>
            </TabPanels>
          </Card>
        </TabsProvider>
      ),
    },
    {
      label: 'Full width divider',
      Example: ({ id }) => (
        <Card>
          <TabsProvider id={id}>
            <Stack space="medium">
              <Tabs label="Test tabs" divider="full">
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
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
      label: 'Full width divider while center aligned',
      Example: ({ id }) => (
        <Card>
          <TabsProvider id={id}>
            <Stack space="medium">
              <Tabs label="Test tabs" align="center" divider="full">
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
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
      label: 'Full width divider with gutter',
      Example: ({ id }) => (
        <TabsProvider id={id}>
          <Tabs label="Test tabs" gutter="gutter" reserveHitArea divider="full">
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
          </Tabs>
          <Card>
            <TabPanels>
              <TabPanel>
                <Placeholder height={200} label="Panel 1" />
              </TabPanel>
              <TabPanel>
                <Placeholder height={200} label="Panel 2" />
              </TabPanel>
            </TabPanels>
          </Card>
        </TabsProvider>
      ),
    },
  ],
};
