import source from '@braid-design-system/source.macro';

import type { Snippets } from '../../../../components/private/Snippets';
import {
  PageBlock,
  Placeholder,
  Stack,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  TabsProvider,
} from '../../../components';

export const snippets: Snippets = [
  {
    group: 'Sections',
    name: 'Tabbed Section',
    code: source(
      <PageBlock width="medium">
        <TabsProvider>
          <Stack space="large">
            <Tabs divider="none" label="Tabs Block">
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </Tabs>

            <TabPanels>
              <TabPanel>
                <Placeholder label="Tab 1 content" height={500} />
              </TabPanel>
              <TabPanel>
                <Placeholder label="Tab 2 content" height={300} />
              </TabPanel>
              <TabPanel>
                <Placeholder label="Tab 3 content" height={400} />
              </TabPanel>
            </TabPanels>
          </Stack>
        </TabsProvider>
      </PageBlock>,
    ),
  },
];
