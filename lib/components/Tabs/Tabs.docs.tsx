import React from 'react';
// import dedent from 'dedent';
import { ComponentDocs } from '../../../site/src/types';
import {
  Text,
  Stack,
  TextLink,
  TabsProvider,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  Box,
} from '..';
import { Placeholder } from '../../playroom/components';

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
      name: '3 Tabs',
      code: (
        <TabsProvider>
          <Tabs label="Test tabs">
            <Tab>First</Tab>
            <Tab>Second</Tab>
            <Tab>Third</Tab>
          </Tabs>
          <TabPanels>
            <TabPanel>Panel 1</TabPanel>
            <TabPanel>Panel 2</TabPanel>
            <TabPanel>Panel 3</TabPanel>
          </TabPanels>
        </TabsProvider>
      ),
    },
  ],
  examples: [
    {
      label: 'Default (overflow is scrollable)',
      Example: () => (
        <TabsProvider>
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
        <TabsProvider>
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
        <TabsProvider>
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
