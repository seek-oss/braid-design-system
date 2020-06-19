import React from 'react';
// import dedent from 'dedent';
import { ComponentDocs } from '../../../site/src/types';
import {
  Text,
  Stack,
  TextLink,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  Box,
  TabsProvider,
  Badge,
} from '..';
import {
  Placeholder,
  TabsProvider as PlayroomTabsProvider,
  Tabs as PlayroomTabs,
} from '../../playroom/components';

const docs: ComponentDocs = {
  category: 'Content',
  screenshotWidths: [],
  subComponents: ['TabsProvider', 'Tab', 'TabPanels', 'TabPanel'],
  description: (
    <Stack space="large">
      <Text>
        The `MenuRenderer` component is a low level component that can be used
        to build higher level menu components that adhere to the{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.1/#menu">
          WAI Authoring Practices
        </TextLink>
        . For example, the{' '}
        <TextLink href="/components/OverflowMenu">OverflowMenu</TextLink> uses
        this internally.
      </Text>
      <Text>
        Implementations of this component must provide a `trigger` that can
        accept DOM properties, in particular event handlers and aria properties
        used to manage the interactions.
      </Text>
    </Stack>
  ),
  snippets: [
    {
      name: '2 Tabs',
      code: (
        <PlayroomTabsProvider>
          <Stack space="medium">
            <PlayroomTabs>
              <Tab>First</Tab>
              <Tab>Second</Tab>
            </PlayroomTabs>
            <TabPanels>
              <TabPanel>
                <Placeholder label="panel 1" height={200} />
              </TabPanel>
              <TabPanel>
                <Placeholder label="panel 2" height={200} />
              </TabPanel>
            </TabPanels>
          </Stack>
        </PlayroomTabsProvider>
      ),
    },
    {
      name: '3 Tabs with badge',
      code: (
        <PlayroomTabsProvider>
          <Stack space="medium">
            <PlayroomTabs>
              <Tab>First</Tab>
              <Tab badge={<Badge>New</Badge>}>Second</Tab>
              <Tab>Third</Tab>
            </PlayroomTabs>
            <TabPanels>
              <TabPanel>
                <Placeholder label="panel 1" height={200} />
              </TabPanel>
              <TabPanel>
                <Placeholder label="panel 2" height={200} />
              </TabPanel>
              <TabPanel>
                <Placeholder label="panel 3" height={200} />
              </TabPanel>
            </TabPanels>
          </Stack>
        </PlayroomTabsProvider>
      ),
    },
    {
      name: '3 Centered Tabs',
      code: (
        <PlayroomTabsProvider>
          <Stack space="medium">
            <PlayroomTabs align="center">
              <Tab>First</Tab>
              <Tab>Second</Tab>
              <Tab>Third</Tab>
            </PlayroomTabs>
            <TabPanels>
              <TabPanel>
                <Placeholder label="panel 1" height={200} />
              </TabPanel>
              <TabPanel>
                <Placeholder label="panel 2" height={200} />
              </TabPanel>
              <TabPanel>
                <Placeholder label="panel 3" height={200} />
              </TabPanel>
            </TabPanels>
          </Stack>
        </PlayroomTabsProvider>
      ),
    },
  ],
  examples: [
    {
      label: 'Default (overflow is scrollable)',
      Example: () => (
        <TabsProvider id="default">
          <Stack space="small">
            <Tabs label="Test tabs">
              <Tab>The first tab</Tab>
              <Tab>Second tab</Tab>
              <Tab>Tab the third</Tab>
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
            </TabPanels>
          </Stack>
        </TabsProvider>
      ),
    },
    {
      label: 'Center align',
      Example: () => (
        <TabsProvider id="center">
          <Stack space="small">
            <Tabs label="Test tabs" align="center">
              <Tab>The first tab</Tab>
              <Tab>Second tab</Tab>
              <Tab>Tab the third</Tab>
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
            </TabPanels>
          </Stack>
        </TabsProvider>
      ),
    },
    {
      label: 'Force fit (no overflow)',
      Example: () => (
        <TabsProvider id="force-fit">
          <Stack space="small">
            <Tabs label="Test tabs" scroll={false}>
              <Tab>The first tab</Tab>
              <Tab>Second tab</Tab>
              <Tab>Tab the third</Tab>
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
            </TabPanels>
          </Stack>
        </TabsProvider>
      ),
      Container: ({ children }) => (
        <Box style={{ maxWidth: 300 }}>{children}</Box>
      ),
    },
  ],
};

export default docs;
