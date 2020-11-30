import React from 'react';
import source from '../../utils/source.macro';
import { ComponentDetail } from '../../../site/src/types';
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
  List,
  Card,
} from '..';
import { Placeholder } from '../../playroom/components';

const docs: ComponentDetail = {
  category: 'Content',
  subComponents: ['TabsProvider', 'Tab', 'TabPanels', 'TabPanel'],
  Example: ({ id }) =>
    source(
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
      </Card>,
    ),
  accessibility: (
    <Text>
      Follows the{' '}
      <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel">
        WAI ARIA Tabs Pattern.
      </TextLink>
    </Text>
  ),
  alternatives: [
    {
      name: 'Accordion',
      description: 'For a vertical, expandable list of content sections.',
    },
  ],
  additional: [
    {
      label: 'Design considerations',
      description: (
        <Text>
          The <Strong>Tabs</Strong> and <Strong>TabPanels</Strong> components
          can be positioned wherever you like, e.g. the tab panels can be nested
          within a <TextLink href="/components/Card">Card</TextLink> while the
          tabs sit above the card.
        </Text>
      ),
    },
    {
      label: 'Development considerations',
      description: (
        <>
          <Text>
            All tab components must be nested within a{' '}
            <Strong>TabsProvider</Strong> which provides the state.
          </Text>
          <Text>
            Somewhere within <Strong>TabsProvider</Strong> you must:
          </Text>
          <List>
            <Text>
              Provide a <Strong>Tabs</Strong> component containing multiple{' '}
              <Strong>Tab</Strong> components.
            </Text>
            <Text>
              Provide a <Strong>TabsPanels</Strong> component containing
              multiple <Strong>TabPanel</Strong> components.
            </Text>
          </List>
        </>
      ),
    },
    {
      label: 'Alignment',
      description: (
        <Text>
          Tabs are left aligned by default, but this can be customised via the{' '}
          <Strong>align</Strong> prop on <Strong>Tabs</Strong>.
        </Text>
      ),
      Example: ({ id }) =>
        source(
          <Card>
            <TabsProvider id={id}>
              <Stack space="medium">
                <Tabs label="Test tabs" align="center">
                  <Tab>The first tab</Tab>
                  <Tab>The second tab</Tab>
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
          </Card>,
        ),
    },
    {
      label: 'Gutters',
      description: (
        <Text>
          Tabs are horizontally scrollable when they’re too wide to fit on
          screen. If you’d like to align the tabs with content below them (e.g.
          when the tab panels are inside a card but the tabs are outside), you
          can provide a <Strong>gutter</Strong> prop to <Strong>Tabs</Strong>{' '}
          that accepts a value from{' '}
          <TextLink href="/foundations/layout#Spacing">
            Braid’s space scale.
          </TextLink>
        </Text>
      ),
      Example: ({ id }) =>
        source(
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
          </TabsProvider>,
        ),
    },
    {
      label: 'State management',
      description: (
        <Text>
          State is managed internally by default. If you’d like to manage tab
          state from the outside, you must pass an <Strong>item</Strong> prop to
          each <Strong>Tab</Strong> and <Strong>TabPanel</Strong> element, as
          well as <Strong>selectedItem</Strong> and <Strong>onChange</Strong>{' '}
          props to <Strong>TabsProvider.</Strong>
        </Text>
      ),
      Example: ({ id, getState, setState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('tab', '2')}

            <TabsProvider
              id={id}
              selectedItem={getState('tab')}
              onChange={setState('tab')}
            >
              <Tabs label="Test tabs" gutter="gutter" reserveHitArea>
                <Tab item="1">The first tab</Tab>
                <Tab item="2">The second tab</Tab>
                <Tab item="3">The third tab</Tab>
                <Tab item="4">The fourth tab</Tab>
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
          </>,
        ),
    },
  ],
};

export default docs;
