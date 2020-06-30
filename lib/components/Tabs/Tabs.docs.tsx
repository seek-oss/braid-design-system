import React from 'react';
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
  Strong,
  BulletList,
  Bullet,
  Card,
  Box,
} from '..';
import {
  Placeholder,
  TabsProvider as PlayroomTabsProvider,
  Tabs as PlayroomTabs,
} from '../../playroom/components';
import { useBraidTheme } from '../BraidProvider/BraidProvider';

const docs: ComponentDocs = {
  category: 'Content',
  screenshotWidths: [320, 1200],
  subComponents: ['TabsProvider', 'Tab', 'TabPanels', 'TabPanel'],
  description: (
    <Stack space="large">
      <Text>
        Follows the{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel">
          WAI ARIA Tabs Pattern.
        </TextLink>
      </Text>
      <Text>
        All tab components must be nested within a <Strong>TabsProvider</Strong>{' '}
        which provides the state.
      </Text>
      <Text>
        Somewhere within <Strong>TabsProvider</Strong> you must:
      </Text>
      <BulletList>
        <Bullet>
          Provide a <Strong>Tabs</Strong> component containing multiple{' '}
          <Strong>Tab</Strong> components.
        </Bullet>
        <Bullet>
          Provide a <Strong>TabsPanels</Strong> component containing multiple{' '}
          <Strong>TabPanel</Strong> components.
        </Bullet>
      </BulletList>
      <Text>
        The <Strong>Tabs</Strong> and <Strong>TabPanels</Strong> components can
        be positioned wherever you like, e.g. the tab panels can be nested
        within a <TextLink href="/components/Card">Card</TextLink> while the
        tabs are outside the card.
      </Text>
      <Text>
        Space above tab text is cropped by default to ensure it adheres to{' '}
        <TextLink href="/foundations/layout">
          Braid’s layout philosophy.
        </TextLink>{' '}
        If you’d like to reinstate this space (e.g. if your tabs are presented
        as a standalone, full-width element within your layout), you can provide
        the <Strong>reserveHitArea</Strong> boolean prop to{' '}
        <Strong>Tabs</Strong>.
      </Text>
      <Text>
        Tabs are horizontally scrollable when they’re too wide to fit on screen.
        If you’d like to align the tabs with content below them (e.g. when the
        tab panels are inside a card but the tabs are outside), you can provide
        a <Strong>gutter</Strong> prop to <Strong>Tabs</Strong> that accepts a
        value from{' '}
        <TextLink href="/foundations/layout#Spacing">
          Braid’s space scale.
        </TextLink>
      </Text>
      <Text>
        State is managed internally by default. If you’d like to manage tab
        state from the outside, you must pass an <Strong>item</Strong> prop to
        each <Strong>Tab</Strong> element, as well as{' '}
        <Strong>selectedItem</Strong> and <Strong>onChange</Strong> props to{' '}
        <Strong>TabsProvider.</Strong>
      </Text>
    </Stack>
  ),
  examples: [
    {
      label: 'Left aligned',
      Example: ({ id }) => (
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
      ),
    },
    {
      label: 'Center aligned',
      Example: ({ id }) => (
        <TabsProvider id={id}>
          <Stack space="medium">
            <Tabs label="Test tabs" align="center">
              <Tab>The first tab</Tab>
              <Tab>The second tab</Tab>
              <Tab>The third tab</Tab>
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
      label: 'With gutter and reserved hit area',
      Container: ({ children }) => (
        <Box style={{ background: useBraidTheme().color.background.body }}>
          {children}
        </Box>
      ),
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
      docsSite: false,
      label: 'Test: Center aligned tabs should be left aligned on mobile',
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
      docsSite: false,
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
      docsSite: false,
      label:
        'Test: Selected tab with gutter should be scrolled into view on load',
      Container: ({ children }) => (
        <Box style={{ background: useBraidTheme().color.background.body }}>
          {children}
        </Box>
      ),
      Example: ({ id }) => (
        <TabsProvider id={id} selectedItem="3">
          <Stack space="medium">
            <Tabs
              label="Test tabs"
              align="center"
              gutter="gutter"
              reserveHitArea
            >
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
          </Stack>
        </TabsProvider>
      ),
    },
  ],
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
                <Placeholder label="First" height={200} />
              </TabPanel>
              <TabPanel>
                <Placeholder label="Second" height={200} />
              </TabPanel>
            </TabPanels>
          </Stack>
        </PlayroomTabsProvider>
      ),
    },
    {
      name: '2 Tabs with Badge',
      code: (
        <PlayroomTabsProvider>
          <Stack space="medium">
            <PlayroomTabs>
              <Tab>First</Tab>
              <Tab badge={<Badge tone="positive">Badge</Badge>}>Second</Tab>
            </PlayroomTabs>
            <TabPanels>
              <TabPanel>
                <Placeholder label="First" height={200} />
              </TabPanel>
              <TabPanel>
                <Placeholder label="Second" height={200} />
              </TabPanel>
            </TabPanels>
          </Stack>
        </PlayroomTabsProvider>
      ),
    },
    {
      name: '2 Tabs (Centred)',
      code: (
        <PlayroomTabsProvider>
          <Stack space="medium">
            <PlayroomTabs align="center">
              <Tab>First</Tab>
              <Tab>Second</Tab>
            </PlayroomTabs>
            <TabPanels>
              <TabPanel>
                <Placeholder label="First" height={200} />
              </TabPanel>
              <TabPanel>
                <Placeholder label="Second" height={200} />
              </TabPanel>
            </TabPanels>
          </Stack>
        </PlayroomTabsProvider>
      ),
    },
    {
      name: '3 Tabs',
      code: (
        <PlayroomTabsProvider>
          <Stack space="medium">
            <PlayroomTabs>
              <Tab>First</Tab>
              <Tab>Second</Tab>
              <Tab>Third</Tab>
            </PlayroomTabs>
            <TabPanels>
              <TabPanel>
                <Placeholder label="First" height={200} />
              </TabPanel>
              <TabPanel>
                <Placeholder label="Second" height={200} />
              </TabPanel>
              <TabPanel>
                <Placeholder label="Third" height={200} />
              </TabPanel>
            </TabPanels>
          </Stack>
        </PlayroomTabsProvider>
      ),
    },
    {
      name: '3 Tabs with Badge',
      code: (
        <PlayroomTabsProvider>
          <Stack space="medium">
            <PlayroomTabs>
              <Tab>First</Tab>
              <Tab>Second</Tab>
              <Tab badge={<Badge tone="positive">Badge</Badge>}>Third</Tab>
            </PlayroomTabs>
            <TabPanels>
              <TabPanel>
                <Placeholder label="First" height={200} />
              </TabPanel>
              <TabPanel>
                <Placeholder label="Second" height={200} />
              </TabPanel>
              <TabPanel>
                <Placeholder label="Third" height={200} />
              </TabPanel>
            </TabPanels>
          </Stack>
        </PlayroomTabsProvider>
      ),
    },
    {
      name: '3 Tabs (Centred)',
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
                <Placeholder label="First" height={200} />
              </TabPanel>
              <TabPanel>
                <Placeholder label="Second" height={200} />
              </TabPanel>
              <TabPanel>
                <Placeholder label="Third" height={200} />
              </TabPanel>
            </TabPanels>
          </Stack>
        </PlayroomTabsProvider>
      ),
    },
  ],
};

export default docs;
