import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

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
  Box,
  IconCompany,
  IconHome,
  IconProfile,
  IconRecommended,
  Toggle,
  Heading,
} from '..';
import { Placeholder } from '../../playroom/components';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

const docs: ComponentDocs = {
  category: 'Content',
  subComponents: ['TabsProvider', 'Tab', 'TabPanels', 'TabPanel'],
  Example: () =>
    source(
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
      </TabsProvider>,
    ),
  description: (
    <Text>
      A horizontally arranged group of buttons that control the visibility of
      the associated content panels.
    </Text>
  ),
  accessibility: (
    <Text>
      Follows the{' '}
      <TextLink href="https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/">
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
  docSections: {
    appearance: [
      {
        label: 'Alignment',
        description: (
          <Text>
            Tabs are left aligned by default, but this can be customised via the{' '}
            <Strong>align</Strong> prop on <Strong>Tabs</Strong>.
          </Text>
        ),
        Example: () =>
          source(
            <TabsProvider>
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
            </TabsProvider>,
          ),
      },
      {
        label: 'Dividers',
        description: (
          <>
            <Heading level="4">Increasing divider width</Heading>
            <Text>
              In cases where you only have a couple of tabs, you may find that
              the tab strip lacks visual affordance. To address this, you can
              set the <Strong>divider</Strong> prop to <Strong>“full”</Strong>{' '}
              on the <Strong>Tabs</Strong> component.
            </Text>
          </>
        ),
        Example: () =>
          source(
            <TabsProvider>
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
            </TabsProvider>,
          ),
      },
      {
        description: (
          <>
            <Heading level="4">Hiding the divider</Heading>
            <Text>
              If you&apos;ve placed the tab strip and tab content on different
              backgrounds, the divider line is likely to be redundant visual
              noise. To hide it, you can set the <Strong>divider</Strong> prop
              to <Strong>“none”</Strong> on the <Strong>Tabs</Strong> component.
            </Text>
          </>
        ),
        Example: () =>
          source(
            <TabsProvider>
              <Tabs label="Test tabs" divider="none">
                <Tab>The first tab</Tab>
                <Tab>The second tab</Tab>
                <Tab>The third tab</Tab>
                <Tab>The fourth tab</Tab>
              </Tabs>
              <Box
                background="surface"
                boxShadow="borderNeutralLight"
                padding="gutter"
              >
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
              </Box>
            </TabsProvider>,
          ),
      },
      {
        label: 'Size',
        description: (
          <Text>
            Customise the size of the Tabs via the <Strong>size</Strong> prop,
            which accepts either <Strong>standard</Strong> or{' '}
            <Strong>small.</Strong>
          </Text>
        ),
        Example: () =>
          source(
            <Stack space="xlarge">
              <Stack space="medium">
                <Text size="small" tone="secondary">
                  Standard tabs
                </Text>
                <TabsProvider>
                  <Tabs label="Standard tabs">
                    <Tab>The first tab</Tab>
                    <Tab>The second tab</Tab>
                    <Tab>The third tab</Tab>
                    <Tab badge={<Badge tone="positive">New</Badge>}>
                      The fourth tab
                    </Tab>
                  </Tabs>
                </TabsProvider>
              </Stack>
              <Stack space="medium">
                <Text size="small" tone="secondary">
                  Small tabs
                </Text>

                <TabsProvider>
                  <Tabs label="Small tabs" size="small">
                    <Tab>The first tab</Tab>
                    <Tab>The second tab</Tab>
                    <Tab>The third tab</Tab>
                    <Tab badge={<Badge tone="positive">New</Badge>}>
                      The fourth tab
                    </Tab>
                  </Tabs>
                </TabsProvider>
              </Stack>
            </Stack>,
          ),
      },
      {
        label: 'Icons',
        description: (
          <>
            <Text>
              For decoration or help distinguishing between tabs, an{' '}
              <Strong>icon</Strong> can be provided. This will be placed to the
              left of the label.
            </Text>
          </>
        ),
        Example: () =>
          source(
            <TabsProvider>
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
            </TabsProvider>,
          ),
      },
      {
        label: 'Badges',
        description: (
          <Text>
            Add a <TextLink href="/components/Badge">Badge</TextLink> alongside
            the <Strong>Tab</Strong> by using the <Strong>badge</Strong> prop.
          </Text>
        ),
        Example: () =>
          source(
            <TabsProvider>
              <Stack space="medium">
                <Tabs label="Test tabs">
                  <Tab>The first tab</Tab>
                  <Tab badge={<Badge tone="positive">New</Badge>}>
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
            </TabsProvider>,
          ),
      },
    ],
    layout: [
      {
        label: 'Placement',
        description: (
          <Text>
            The <Strong>Tabs</Strong> and <Strong>TabPanels</Strong> components
            can be positioned wherever you like, e.g. the tab panels can be
            nested within a <TextLink href="/components/Card">Card</TextLink>{' '}
            while the tabs sit above the card.
          </Text>
        ),
      },
      {
        label: 'Reserve hit area',
        description: (
          <>
            <Text>
              By default, a <Strong>Tab</Strong> will only occupy the vertical
              space from the top of the label to the active underline. This
              means the hit area will bleed out into the space above.
            </Text>
            <Text>
              The bleed can be disabled by setting the{' '}
              <Strong>reserveHitArea</Strong> prop to <Strong>true</Strong>.
            </Text>
          </>
        ),
        Example: ({ getState, toggleState, setDefaultState }) =>
          source(
            <>
              {setDefaultState('reserveHitArea', false)}

              <Stack space="xlarge">
                <Toggle
                  label="reserveHitArea"
                  on={getState('reserveHitArea')}
                  onChange={() => toggleState('reserveHitArea')}
                  align="right"
                  togglePosition="trailing"
                />

                <Box position="relative">
                  <TabsProvider>
                    <Tabs
                      label="Standard tabs"
                      reserveHitArea={getState('reserveHitArea')}
                    >
                      <Tab>The first tab</Tab>
                      <Tab>The second tab</Tab>
                      <Tab>The third tab</Tab>
                      <Tab>The fourth tab</Tab>
                    </Tabs>
                  </TabsProvider>
                  <Box
                    position="absolute"
                    inset={0}
                    boxShadow="borderCriticalLight"
                    pointerEvents="none"
                    zIndex={1}
                  />
                </Box>
              </Stack>
            </>,
          ),
      },
      {
        label: 'Gutters',
        description: (
          <Text>
            Tabs are horizontally scrollable when they’re too wide to fit on
            screen. If you’d like to align the tabs with content below them
            (e.g. when the tab panels are inside a card but the tabs are
            outside), you can provide a <Strong>gutter</Strong> prop to{' '}
            <Strong>Tabs</Strong> that accepts a value from{' '}
            <TextLink href="/foundations/layout#spacing">
              Braid’s space scale.
            </TextLink>
          </Text>
        ),
        Example: () =>
          source(
            <TabsProvider>
              <Tabs label="Test tabs" divider="none" gutter="gutter">
                <Tab>The first tab</Tab>
                <Tab>The second tab</Tab>
                <Tab>The third tab</Tab>
                <Tab>The fourth tab</Tab>
              </Tabs>
              <Box
                background="surface"
                boxShadow="borderNeutralLight"
                padding="gutter"
              >
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
              </Box>
            </TabsProvider>,
          ),
      },
    ],
    interaction: [
      {
        label: 'State management',
        description: (
          <Text>
            Tabs manage their own state by default. If you’d like to manage the
            state yourself, you must pass an <Strong>item</Strong> prop to each{' '}
            <Strong>Tab</Strong> and <Strong>TabPanel</Strong> element, as well
            as <Strong>selectedItem</Strong> and <Strong>onChange</Strong> props
            to <Strong>TabsProvider.</Strong>
          </Text>
        ),
        Example: ({ getState, setState, setDefaultState }) =>
          source(
            <>
              {setDefaultState('tab', 'second')}

              <TabsProvider
                selectedItem={getState('tab')}
                onChange={(index, item) => setState('tab', item)}
              >
                <Stack space="medium">
                  <Tabs label="Controlled state tabs">
                    <Tab item="first">The first tab</Tab>
                    <Tab item="second">The second tab</Tab>
                    <Tab item="third">The third tab</Tab>
                    <Tab item="fourth">The fourth tab</Tab>
                  </Tabs>
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
                </Stack>
              </TabsProvider>
            </>,
          ),
      },
    ],
    bestPractices: [
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
            <List space="medium">
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
        label: 'When to use',
        description: (
          <Stack space="xlarge">
            <Stack space="large">
              <Text>Use Tabs when:</Text>
              <List space="large">
                <Text>you have a small, fixed set of related sections</Text>
                <Text>users need to view one section at a time</Text>
                <Text>the content shares the same context.</Text>
              </List>
            </Stack>
            <Stack space="large">
              <Text>Don&rsquo;t use Tabs when:</Text>
              <List space="large">
                <Text>
                  users need to compare sections or view them at the same time
                  (use a{' '}
                  <TextLink href="/patterns/templates/sections/card-list">
                    Card List
                  </TextLink>{' '}
                  or{' '}
                  <TextLink href="/patterns/divided-list">
                    Divided List
                  </TextLink>{' '}
                  instead)
                </Text>
                <Text>
                  the content is a linear, as in a step-by-step flow (use a{' '}
                  <TextLink href="/components/Stepper">Stepper</TextLink>{' '}
                  instead)
                </Text>
                <Text>
                  the information is critical and shouldn&rsquo;t risk being
                  missed inside a tab (surface upfront instead)
                </Text>
              </List>
            </Stack>
          </Stack>
        ),
      },
      dataAttributeDocs({
        code: `
          <TabsProvider>
            <Tabs
              data={{ testid: 'tabs-1' }}
              // => data-testid="tabs-1"
            >
              <Tab data={{ testid: 'tab-1' }}>
                ...
              </Tab>
            </Tabs>
            <TabPanels>
              <TabPanel data={{ testid: 'tab-panel-1' }}>
                ...
              </TabPanel>
            </TabPanels>
          </TabsProvider>
        `,
        supportsNativeSyntax: false,
      }),
    ],
  },
};

export default docs;
