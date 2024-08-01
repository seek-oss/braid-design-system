import React from 'react';
import type { Snippets } from '../private/Snippets';
import {
  TabsProvider,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  Badge,
  Stack,
  Placeholder,
  IconHome,
} from '../../playroom/components';
import source from '@braid-design-system/source.macro';

export const snippets: Snippets = [
  {
    name: 'With full divider',
    code: source(
      <TabsProvider>
        <Stack space="medium">
          <Tabs divider="full">
            <Tab>First Tab</Tab>
            <Tab badge={<Badge tone="positive">Badge</Badge>}>Second Tab</Tab>
          </Tabs>
          <TabPanels>
            <TabPanel>
              <Placeholder label="First" height={200} />
            </TabPanel>
            <TabPanel>
              <Placeholder label="Second" height={200} />
            </TabPanel>
          </TabPanels>
        </Stack>
      </TabsProvider>,
    ),
  },
  {
    name: 'With no divider',
    code: source(
      <TabsProvider>
        <Stack space="medium">
          <Tabs divider="none">
            <Tab>First Tab</Tab>
            <Tab badge={<Badge tone="positive">Badge</Badge>}>Second Tab</Tab>
          </Tabs>
          <TabPanels>
            <TabPanel>
              <Placeholder label="First" height={200} />
            </TabPanel>
            <TabPanel>
              <Placeholder label="Second" height={200} />
            </TabPanel>
          </TabPanels>
        </Stack>
      </TabsProvider>,
    ),
  },
  {
    name: 'With a badge',
    code: source(
      <TabsProvider>
        <Stack space="medium">
          <Tabs>
            <Tab>First Tab</Tab>
            <Tab badge={<Badge tone="positive">Badge</Badge>}>Second Tab</Tab>
          </Tabs>
          <TabPanels>
            <TabPanel>
              <Placeholder label="First" height={200} />
            </TabPanel>
            <TabPanel>
              <Placeholder label="Second" height={200} />
            </TabPanel>
          </TabPanels>
        </Stack>
      </TabsProvider>,
    ),
  },
  {
    name: 'With an icon',
    code: source(
      <TabsProvider>
        <Stack space="medium">
          <Tabs>
            <Tab icon={<IconHome />}>First Tab</Tab>
            <Tab>Second Tab</Tab>
          </Tabs>
          <TabPanels>
            <TabPanel>
              <Placeholder label="First" height={200} />
            </TabPanel>
            <TabPanel>
              <Placeholder label="Second" height={200} />
            </TabPanel>
          </TabPanels>
        </Stack>
      </TabsProvider>,
    ),
  },
  {
    name: 'Align center',
    code: source(
      <TabsProvider>
        <Stack space="medium">
          <Tabs align="center">
            <Tab>First Tab</Tab>
            <Tab>Second Tab</Tab>
          </Tabs>
          <TabPanels>
            <TabPanel>
              <Placeholder label="First" height={200} />
            </TabPanel>
            <TabPanel>
              <Placeholder label="Second" height={200} />
            </TabPanel>
          </TabPanels>
        </Stack>
      </TabsProvider>,
    ),
  },
  {
    name: 'Size small',
    code: source(
      <TabsProvider>
        <Stack space="medium">
          <Tabs size="small">
            <Tab>First Tab</Tab>
            <Tab>Second Tab</Tab>
          </Tabs>
          <TabPanels>
            <TabPanel>
              <Placeholder label="First" height={200} />
            </TabPanel>
            <TabPanel>
              <Placeholder label="Second" height={200} />
            </TabPanel>
          </TabPanels>
        </Stack>
      </TabsProvider>,
    ),
  },
];
