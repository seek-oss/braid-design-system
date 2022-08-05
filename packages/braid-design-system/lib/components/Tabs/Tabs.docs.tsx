import React from 'react';
import source from '../../utils/source.macro';
import { ComponentDocs } from '../../../../../site/src/types';
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
  IconCompany,
  IconHome,
  IconProfile,
  IconRecommended,
} from '..';
import { Placeholder } from '../../playroom/components';

const docs: ComponentDocs = {
  category: 'Content',
  subComponents: ['TabsProvider', 'Tab', 'TabPanels', 'TabPanel'],
  Example: ({ id }) =>
    source(
      <Card rounded>
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
      <TextLink href="https://www.w3.org/TR/wai-aria-practices/#tabpanel">
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
      label: 'Increasing the divider width',
      description: (
        <Text>
          In cases where you only have a couple of tabs, you may find that the{' '}
          tab strip lacks visual affordance. To address this, you can set the{' '}
          <Strong>divider</Strong> prop to <Strong>“full”</Strong> on the{' '}
          <Strong>Tabs</Strong> component.
        </Text>
      ),
      Example: ({ id }) =>
        source(
          <Card>
            <TabsProvider id={`${id}_1`}>
              <Stack space="medium">
                <Tabs label="Test tabs" divider="full">
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
      label: 'Hiding the divider',
      description: (
        <Text>
          If you’ve placed the tab strip and tab content on different
          backgrounds, the divider line is likely to be redundant visual noise.
          To hide it, you can set the <Strong>divider</Strong> prop to{' '}
          <Strong>“none”</Strong> on the <Strong>Tabs</Strong> component.
        </Text>
      ),
      Example: ({ id }) =>
        source(
          <TabsProvider id={`${id}_2`}>
            <Tabs label="Test tabs" divider="none">
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
      label: 'Gutters',
      description: (
        <Text>
          Tabs are horizontally scrollable when they’re too wide to fit on
          screen. If you’d like to align the tabs with content below them (e.g.
          when the tab panels are inside a card but the tabs are outside), you
          can provide a <Strong>gutter</Strong> prop to <Strong>Tabs</Strong>{' '}
          that accepts a value from{' '}
          <TextLink href="/foundations/layout#spacing">
            Braid’s space scale.
          </TextLink>
        </Text>
      ),
      Example: ({ id }) =>
        source(
          <TabsProvider id={id}>
            <Tabs label="Test tabs" divider="none" gutter="gutter">
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
      label: 'Badge support',
      description: (
        <Text>
          Add a <TextLink href="/components/Badge">Badge</TextLink> alongside
          the <Strong>Tab</Strong> by using the <Strong>badge</Strong> prop.
        </Text>
      ),
      Example: ({ id }) =>
        source(
          <Card>
            <TabsProvider id={id}>
              <Stack space="medium">
                <Tabs label="Test tabs">
                  <Tab>The first tab</Tab>
                  <Tab badge={<Badge tone="positive">Positive</Badge>}>
                    The second tab
                  </Tab>
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
          </Card>,
        ),
    },
    {
      label: 'Inserting an icon',
      description: (
        <>
          <Text>
            For decoration or help distinguishing between tabs, an{' '}
            <Strong>icon</Strong> can be provided. This will be placed to the
            left of the label.
          </Text>
        </>
      ),
      Example: ({ id }) =>
        source(
          <Card>
            <TabsProvider id={id}>
              <Stack space="medium">
                <Tabs label="Test tabs">
                  <Tab icon={<IconHome />}>The first tab</Tab>
                  <Tab icon={<IconRecommended />}>The second tab</Tab>
                  <Tab icon={<IconCompany />}>The third tab</Tab>
                  <Tab icon={<IconProfile />}>The fourth tab</Tab>
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
    },
    {
      label: 'State management',
      description: (
        <Text>
          Tabs manage their own state by default. If you’d like to manage the
          state yourself, you must pass an <Strong>item</Strong> prop to each{' '}
          <Strong>Tab</Strong> and <Strong>TabPanel</Strong> element, as well as{' '}
          <Strong>selectedItem</Strong> and <Strong>onChange</Strong> props to{' '}
          <Strong>TabsProvider.</Strong>
        </Text>
      ),
      Example: ({ id, getState, setState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('tab', 'second')}

            <TabsProvider
              id={id}
              selectedItem={getState('tab')}
              onChange={(index, item) => setState('tab', item)}
            >
              <Tabs
                label="Test tabs"
                gutter="gutter"
                divider="none"
                reserveHitArea
              >
                <Tab item="first">The first tab</Tab>
                <Tab item="second">The second tab</Tab>
                <Tab item="third">The third tab</Tab>
                <Tab item="fourth">The fourth tab</Tab>
              </Tabs>
              <Card>
                <TabPanels>
                  <TabPanel item="first">
                    <Placeholder height={200} label="Panel 1" />
                  </TabPanel>
                  <TabPanel item="second">
                    <Placeholder height={200} label="Panel 2" />
                  </TabPanel>
                  <TabPanel item="third">
                    <Placeholder height={200} label="Panel 3" />
                  </TabPanel>
                  <TabPanel item="fourth">
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
