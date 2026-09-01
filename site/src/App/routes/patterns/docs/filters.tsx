import { List, Stack, Text, TextLink } from 'braid-design-system';

import type { PatternDocs } from '../../../../types';

export const docs: PatternDocs = {
  description: (
    <Text>
      Allows users to narrow down content or data by one or more criteria,
      making relevant items easier to find.
    </Text>
  ),
  alternatives: [
    {
      name: 'bulk-actions',
      section: 'patterns',
      description:
        'For applying a single action across multiple selected items.',
    },
    {
      name: 'Checkbox',
      description: 'For selecting multiple values.',
    },
    {
      name: 'RadioGroup',
      description: 'For selecting a single value.',
    },
  ],
  accessibility: (
    <>
      <Text>
        Filters inherit accessibility features from the components used to
        create them, such as{' '}
        <TextLink href="/components/Checkbox">Checkbox</TextLink> and{' '}
        <TextLink href="/components/RadioGroup">RadioGroup</TextLink>. The
        filtering system still needs to be accessible as a whole. Ensure users
        can:
      </Text>
      <List space="large">
        <Text>Easily identify and understand labels for all controls</Text>
        <Text>Be notified of state changes</Text>
        <Text>Complete all actions with the keyboard</Text>
      </List>
    </>
  ),
  docSections: {
    interaction: [
      {
        label: 'Desktop and tablet',
        description: (
          <List space="large">
            <Text>
              Users should be able to view and interact with filters at the same
              time as the data set. Filters may collapse, expand or hide, but
              they should not obstruct results.
            </Text>
            <Text>
              One way to achieve this is a sidebar. Keep filter interactions
              inside the sidebar so they don&rsquo;t expand over the results.
            </Text>
            <Text>
              Apply filters as soon as a selection is made. If results are slow
              to return, use a confirmation button to apply serveral changes at
              once.
            </Text>
          </List>
        ),
      },
      {
        label: 'Mobile and apps',
        description: (
          <List space="large">
            <Text>
              Place filters in a{' '}
              <TextLink href="/components/Drawer">Drawer</TextLink> (or bottom
              sheet on apps) accessed by a button. Avoid nesting drawers, let
              users scroll instead.
            </Text>
            <Text>
              Provide a button to close the drawer and view results. Consider
              showing a results count in the button text, for example “View 27
              matches”. Include a control to clear all filters, and consider
              making these sticky at the bottom.
            </Text>
            <Text>
              Dismissing the drawer should act as an escape and cancel the most
              recent filter selection.
            </Text>
          </List>
        ),
      },
    ],
    bestPractices: [
      {
        label: 'General best practice',
        description: (
          <List space="large">
            <Text>
              Be intentional with the filters you provide. Show only relevant
              filters. Promote the most important filters and minimise less
              important ones.
            </Text>
            <Text>
              Make it clear what filters have been applied, with an easy way to
              edit or remove them. Consider a counter for how many filters are
              applied, and provide a control that clears all filters.
            </Text>
            <Text>
              Maintain accessibility. Clearly label all filters. Ensure all
              actions can be completed by keyboard or with assistive technology.
            </Text>
            <Text>
              Provide a quality mobile experience. Users should have access to
              the same filter options on web and mobile.
            </Text>
          </List>
        ),
      },
      {
        label: 'When to use',
        description: (
          <Stack space="xlarge">
            <Stack space="large">
              <Text>Use filters when:</Text>
              <List space="large">
                <Text>users need to hide and show items in a list</Text>
                <Text>
                  users need to narrow down a large data set to gain insights.
                </Text>
              </List>
            </Stack>
            <Stack space="large">
              <Text>Don&rsquo;t use filters when:</Text>
              <List space="large">
                <Text>
                  users only need to change the order of items, not hide them
                  (provide a sort option instead)
                </Text>
                <Text>
                  there are only a few predefined views to switch between
                  (provide a view toggle instead).
                </Text>
              </List>
            </Stack>
          </Stack>
        ),
      },
    ],
  },
};

export default docs;
