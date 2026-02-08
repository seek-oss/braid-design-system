import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { setChromatic } from 'braid-storybook/chromatic';

import {
  Stack,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  TabsProvider,
  Badge,
  IconHome,
} from '../';
import { Placeholder } from '../../playroom/components';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    chromatic: setChromatic({ viewports: ['mobile', 'wide'] }),
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const ActiveIndicatorBasic: Story = {
  name: 'Active indicator - basic',
  render: () => (
    <Stack space="medium">
      {['1', '2', '3'].map((item) => (
        <TabsProvider selectedItem={item} key={item}>
          <Tabs label="Standard tabs">
            <Tab item="1">First Tab</Tab>
            <Tab item="2">Middle Tab</Tab>
            <Tab item="3">Last Tab</Tab>
          </Tabs>
        </TabsProvider>
      ))}
    </Stack>
  ),
};

export const ActiveIndicatorWithIcons: Story = {
  name: 'Active indicator - with icons',
  render: () => (
    <Stack space="medium">
      {['1', '2', '3'].map((item) => (
        <TabsProvider selectedItem={item} key={item}>
          <Tabs label="Icon tabs">
            <Tab item="1" icon={<IconHome />}>
              First Tab
            </Tab>
            <Tab item="2" icon={<IconHome />}>
              Middle Tab
            </Tab>
            <Tab item="3" icon={<IconHome />}>
              Last Tab
            </Tab>
          </Tabs>
        </TabsProvider>
      ))}
    </Stack>
  ),
};

export const ActiveIndicatorWithBadge: Story = {
  name: 'Active indicator - with badge',
  render: () => (
    <Stack space="medium">
      {['1', '2', '3'].map((item) => (
        <TabsProvider selectedItem={item} key={item}>
          <Tabs label="Badge tabs">
            <Tab item="1" badge={<Badge tone="positive">New</Badge>}>
              First Tab
            </Tab>
            <Tab item="2" badge={<Badge tone="positive">New</Badge>}>
              Middle Tab
            </Tab>
            <Tab item="3" badge={<Badge tone="positive">New</Badge>}>
              Last Tab
            </Tab>
          </Tabs>
        </TabsProvider>
      ))}
    </Stack>
  ),
};

export const ActiveIndicatorWithIconsAndBadge: Story = {
  name: 'Active indicator - with icons and badge',
  render: () => (
    <Stack space="medium">
      {['1', '2', '3'].map((item) => (
        <TabsProvider selectedItem={item} key={item}>
          <Tabs label="Badge tabs">
            <Tab
              item="1"
              icon={<IconHome />}
              badge={<Badge tone="positive">New</Badge>}
            >
              First Tab
            </Tab>
            <Tab
              item="2"
              icon={<IconHome />}
              badge={<Badge tone="positive">New</Badge>}
            >
              Middle Tab
            </Tab>
            <Tab
              item="3"
              icon={<IconHome />}
              badge={<Badge tone="positive">New</Badge>}
            >
              Last Tab
            </Tab>
          </Tabs>
        </TabsProvider>
      ))}
    </Stack>
  ),
};

export const LeftAligned: Story = {
  name: 'Left aligned',
  render: () => (
    <TabsProvider>
      <Stack space="medium">
        <Tabs label="Test tabs">
          <Tab>The first tab</Tab>
          <Tab>The second tab</Tab>
          <Tab>The third tab</Tab>
          <Tab badge={<Badge tone="positive">New</Badge>}>The fourth tab</Tab>
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
};

export const CenterAligned: Story = {
  name: 'Center aligned',
  render: () => (
    <TabsProvider>
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
  ),
};

export const WithGutter: Story = {
  name: 'With gutter',
  render: () => (
    <TabsProvider>
      <Stack space="medium">
        <Tabs label="Test tabs" gutter="gutter">
          <Tab>The first tab</Tab>
          <Tab>The second tab</Tab>
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
  ),
};

export const WithGutterAndReservedHitArea: Story = {
  name: 'With gutter and reserved hit area',
  render: () => (
    <TabsProvider>
      <Stack space="medium">
        <Tabs label="Test tabs" gutter="gutter" reserveHitArea>
          <Tab>The first tab</Tab>
          <Tab>The second tab</Tab>
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
  ),
};

export const TestCenterAlignedTabsOnMobile: Story = {
  name: 'Test: Center aligned tabs should be left aligned on mobile when content is too wide',
  render: () => (
    <TabsProvider>
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
};

export const TestSelectedTabScrolledIntoView: Story = {
  name: 'Test: Selected tab should be scrolled into view on load',
  render: () => (
    <TabsProvider selectedItem="4">
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
};

export const TestSelectedTabWithGutterScrolledIntoView: Story = {
  name: 'Test: Selected tab with gutter should be scrolled into view on load',
  render: () => (
    <TabsProvider selectedItem="3">
      <Stack space="medium">
        <Tabs label="Test tabs" align="center" gutter="gutter" reserveHitArea>
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
};

export const FullWidthDivider: Story = {
  name: 'Full width divider',
  render: () => (
    <TabsProvider>
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
  ),
};

export const FullWidthDividerCenterAligned: Story = {
  name: 'Full width divider while center aligned',
  render: () => (
    <TabsProvider>
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
  ),
};

export const FullWidthDividerWithGutter: Story = {
  name: 'Full width divider with gutter',
  render: () => (
    <TabsProvider>
      <Stack space="medium">
        <Tabs label="Test tabs" gutter="gutter" reserveHitArea divider="full">
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
  ),
};

export const WithAnIcon: Story = {
  name: 'With an icon',
  render: () => (
    <TabsProvider>
      <Stack space="medium">
        <Tabs label="Test tabs">
          <Tab icon={<IconHome />}>The first tab</Tab>
          <Tab icon={<IconHome />}>The second tab</Tab>
          <Tab icon={<IconHome />} badge={<Badge tone="positive">New</Badge>}>
            The third tab
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
        </TabPanels>
      </Stack>
    </TabsProvider>
  ),
};

export const SizeSmall: Story = {
  name: 'Size small',
  render: () => (
    <TabsProvider>
      <Stack space="medium">
        <Tabs label="Test tabs" size="small">
          <Tab icon={<IconHome />}>The first tab</Tab>
          <Tab icon={<IconHome />}>The second tab</Tab>
          <Tab icon={<IconHome />} badge={<Badge tone="positive">New</Badge>}>
            The third tab
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
        </TabPanels>
      </Stack>
    </TabsProvider>
  ),
};
