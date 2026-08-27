import source from '@braid-design-system/source.macro';
import {
  Accordion,
  AccordionItem,
  Autosuggest,
  Badge,
  Box,
  Button,
  Checkbox,
  Column,
  Columns,
  Disclosure,
  Drawer,
  IconSearch,
  Inline,
  List,
  MonthPicker,
  RadioGroup,
  RadioItem,
  Stack,
  Strong,
  Text,
  TextField,
  TextLink,
} from 'braid-design-system';
import { Placeholder } from 'braid-design-system/playroom/components';

import type { PatternDocs } from '../../../types';

export const docs: PatternDocs = {
  description: (
    <Text>
      Allows users to narrow down content or data by one or more criteria,
      making relevant items easier to find.
    </Text>
  ),
  additional: [
    {
      label: 'Visual guidelines',
      description: (
        <>
          <Text>
            Filters are complex, so one solution won&rsquo;t accommodate every
            context. These are recommendations with room for flexibility. If you
            have questions that aren&rsquo;t answered here, reach out in{' '}
            <TextLink href="https://seekchat.slack.com/archives/CMBLA5Q1E">
              #braid-design-support
            </TextLink>
            .
          </Text>
          <Text>
            <Strong>General best practice</Strong>
          </Text>
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
          <Text>
            <Strong>Desktop and tablet</Strong>
          </Text>
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
              Apply filters as soon as a selection is made. If data return speed
              is particularly slow, a batched confirm action may be appropriate
              — discuss this with design support.
            </Text>
          </List>
          <Text>
            <Strong>Mobile and apps</Strong>
          </Text>
          <List space="large">
            <Text>
              Place filters in a{' '}
              <TextLink href="/components/Drawer">Drawer</TextLink> (or bottom
              sheet on apps) accessed by a button. Avoid nesting drawers. Let
              users scroll a single drawer to reach the filters.
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
        </>
      ),
    },
    {
      label: 'Accessibility considerations',
      description: (
        <>
          <Text>
            Filters inherit accessibility features from the components used to
            create them, such as Checkbox and RadioGroup. The filtering system
            still needs to be accessible as a whole. Ensure users can:
          </Text>
          <List space="large">
            <Text>Easily identify and understand labels for all controls</Text>
            <Text>Be notified of state changes</Text>
            <Text>Complete all actions with the keyboard</Text>
          </List>
        </>
      ),
    },
    {
      label: 'When to use',
      description: (
        <List space="large">
          <Text>
            Applying filters to hide and show items in a list — to create
            efficiencies while performing a task, or to help users find
            something and make a decision
          </Text>
          <Text>
            Manipulating a data set to gain insights — for example an analytics
            usage report
          </Text>
        </List>
      ),
    },
    {
      label: 'Relevant Braid components',
      description: (
        <Text>
          The following components are often useful when designing filters.
          Custom components may still be required. Reach out in{' '}
          <TextLink href="https://seekchat.slack.com/archives/CMBLA5Q1E">
            #braid-design-support
          </TextLink>{' '}
          to discuss options.
        </Text>
      ),
      Example: ({ getState, setState, setDefaultState, toggleState }) =>
        source(
          <>
            {setDefaultState('radio', '')}
            {setDefaultState('check1', false)}
            {setDefaultState('check2', false)}
            {setDefaultState('check3', false)}
            {setDefaultState('monthpicker', {})}
            {setDefaultState('search', '')}
            {setDefaultState('fruit', { text: '' })}
            {setDefaultState('drawer', false)}
            <Box
              boxShadow="borderNeutralLight"
              background="surface"
              padding="large"
            >
              <Stack space="xlarge">
                <Columns space="small" collapseBelow="tablet">
                  <Column>
                    <Stack space="small">
                      <Text size="large">
                        <TextLink href="/components/RadioGroup">
                          RadioGroup
                        </TextLink>
                      </Text>
                      <Box boxShadow="borderNeutralLight" padding="large">
                        <RadioGroup
                          label="Label"
                          value={getState('radio')}
                          onChange={({ currentTarget: { value } }) =>
                            setState('radio', value)
                          }
                        >
                          <RadioItem label="One" value="1" />
                          <RadioItem label="Two" value="2" />
                        </RadioGroup>
                      </Box>
                    </Stack>
                  </Column>
                  <Column>
                    <Stack space="small">
                      <Text size="large">
                        <TextLink href="/components/Checkbox">
                          Checkbox
                        </TextLink>
                      </Text>
                      <Box boxShadow="borderNeutralLight" padding="large">
                        <Stack space="small">
                          <Checkbox
                            label="Label"
                            checked={getState('check1')}
                            onChange={() => toggleState('check1')}
                          />
                          <Checkbox
                            label="Label"
                            checked={getState('check2')}
                            onChange={() => toggleState('check2')}
                          />
                          <Checkbox
                            label="Label"
                            checked={getState('check3')}
                            onChange={() => toggleState('check3')}
                          />
                        </Stack>
                      </Box>
                    </Stack>
                  </Column>
                </Columns>
                <Stack space="small">
                  <Text size="large">
                    <TextLink href="/components/MonthPicker">
                      MonthPicker
                    </TextLink>
                  </Text>
                  <Box boxShadow="borderNeutralLight" padding="large">
                    <MonthPicker
                      label="Month"
                      value={getState('monthpicker')}
                      onChange={setState('monthpicker')}
                    />
                  </Box>
                </Stack>
                <Columns space="gutter" collapseBelow="tablet">
                  <Column>
                    <Stack space="small">
                      <Text size="large">
                        <TextLink href="/components/TextField">
                          TextField
                        </TextLink>
                      </Text>
                      <Box boxShadow="borderNeutralLight" padding="large">
                        <TextField
                          label="Label"
                          icon={<IconSearch />}
                          placeholder="Search"
                          value={getState('search')}
                          onChange={({ currentTarget: { value } }) =>
                            setState('search', value)
                          }
                        />
                      </Box>
                    </Stack>
                  </Column>
                  <Column>
                    <Stack space="small">
                      <Text size="large">
                        <TextLink href="/components/Autosuggest">
                          Autosuggest
                        </TextLink>
                      </Text>
                      <Box boxShadow="borderNeutralLight" padding="large">
                        <Autosuggest
                          id="fruit"
                          label="Fruit"
                          value={getState('fruit')}
                          onChange={setState('fruit')}
                          suggestions={[
                            { text: 'Apples' },
                            { text: 'Bananas' },
                            { text: 'Carrots' },
                          ]}
                        />
                      </Box>
                    </Stack>
                  </Column>
                </Columns>
                <Columns space="small" collapseBelow="tablet">
                  <Column>
                    <Stack space="small">
                      <Text size="large">
                        <TextLink href="/components/Badge">Badge</TextLink>
                      </Text>
                      <Box boxShadow="borderNeutralLight" padding="xlarge">
                        <Inline space="small">
                          <Badge tone="info">Badge</Badge>
                          <Badge tone="positive">Badge</Badge>
                          <Badge tone="promote">Badge</Badge>
                        </Inline>
                      </Box>
                    </Stack>
                  </Column>
                  <Column>
                    <Stack space="small">
                      <Text size="large">
                        <TextLink href="/components/Drawer">Drawer</TextLink>
                      </Text>
                      <Box boxShadow="borderNeutralLight" padding="large">
                        <Inline
                          space="small"
                          align={{
                            mobile: 'center',
                            tablet: 'left',
                          }}
                        >
                          <Button onClick={() => toggleState('drawer')}>
                            Open drawer
                          </Button>
                        </Inline>
                      </Box>
                    </Stack>
                  </Column>
                </Columns>
                <Columns space="small" collapseBelow="tablet">
                  <Column>
                    <Stack space="small">
                      <Text size="large">
                        <TextLink href="/components/Accordion">
                          Accordion
                        </TextLink>
                      </Text>
                      <Box boxShadow="borderNeutralLight" padding="large">
                        <Accordion size="standard">
                          <AccordionItem label="Item 1">
                            <Text>Content</Text>
                          </AccordionItem>
                          <AccordionItem label="Item 2">
                            <Text>Content</Text>
                          </AccordionItem>
                        </Accordion>
                      </Box>
                    </Stack>
                  </Column>
                  <Column>
                    <Stack space="small">
                      <Text size="large">
                        <TextLink href="/components/Disclosure">
                          Disclosure
                        </TextLink>
                      </Text>
                      <Box boxShadow="borderNeutralLight" padding="large">
                        <Disclosure expandLabel="Show" collapseLabel="Hide">
                          <Stack space="large">
                            <Text>Content</Text>
                          </Stack>
                        </Disclosure>
                      </Box>
                    </Stack>
                  </Column>
                </Columns>
              </Stack>
            </Box>
            <Drawer
              title="Drawer title"
              description={<Text tone="secondary">Optional description</Text>}
              open={getState('drawer')}
              onClose={() => toggleState('drawer')}
            >
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
            </Drawer>
          </>,
        ),
    },
  ],
};

export default docs;
