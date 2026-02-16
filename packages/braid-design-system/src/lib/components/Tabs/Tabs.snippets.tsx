import source from '@braid-design-system/source.macro';

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
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'With full divider',
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
    description: 'With no divider',
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
    description: 'With a badge',
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
    description: 'With an icon',
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
    description: 'Align center',
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
    description: 'Size small',
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
