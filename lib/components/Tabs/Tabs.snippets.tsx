import React from 'react';
import { Snippets } from '../private/Snippets';
import {
  TabsProvider,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  Badge,
  Stack,
  Placeholder,
} from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
  {
    name: '2 Tabs',
    code: source(
      <TabsProvider>
        <Stack space="medium">
          <Tabs>
            <Tab>First</Tab>
            <Tab>Second</Tab>
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
    name: '2 Tabs with Badge',
    code: source(
      <TabsProvider>
        <Stack space="medium">
          <Tabs>
            <Tab>First</Tab>
            <Tab badge={<Badge tone="positive">Badge</Badge>}>Second</Tab>
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
    name: '2 Tabs (Centred)',
    code: source(
      <TabsProvider>
        <Stack space="medium">
          <Tabs align="center">
            <Tab>First</Tab>
            <Tab>Second</Tab>
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
    name: '3 Tabs',
    code: source(
      <TabsProvider>
        <Stack space="medium">
          <Tabs>
            <Tab>First</Tab>
            <Tab>Second</Tab>
            <Tab>Third</Tab>
          </Tabs>
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
      </TabsProvider>,
    ),
  },
  {
    name: '3 Tabs with Badge',
    code: source(
      <TabsProvider>
        <Stack space="medium">
          <Tabs>
            <Tab>First</Tab>
            <Tab>Second</Tab>
            <Tab badge={<Badge tone="positive">Badge</Badge>}>Third</Tab>
          </Tabs>
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
      </TabsProvider>,
    ),
  },
  {
    name: '3 Tabs (Centred)',
    code: source(
      <TabsProvider>
        <Stack space="medium">
          <Tabs align="center">
            <Tab>First</Tab>
            <Tab>Second</Tab>
            <Tab>Third</Tab>
          </Tabs>
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
      </TabsProvider>,
    ),
  },
];
