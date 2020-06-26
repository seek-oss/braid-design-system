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
        Follows the{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel">
          WAI ARIA Tabs Pattern.
        </TextLink>
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
              <Tab>The second tab</Tab>
              <Tab>The third tab</Tab>
              <Tab>The fourth tab</Tab>
              <Tab>The fifth tab</Tab>
              <Tab>The sixth tab</Tab>
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
              <TabPanel>
                <Placeholder height={200} label="Panel 6" />
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
  ],
};

export default docs;
