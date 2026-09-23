import source from '@braid-design-system/source.macro';
import {
  Actions,
  Button,
  Checkbox,
  Column,
  Columns,
  ContentBlock,
  Dropdown,
  Heading,
  Hidden,
  IconArrow,
  IconSend,
  Inline,
  List,
  MonthPicker,
  PageBlock,
  Stack,
  Step,
  Stepper,
  Strong,
  Text,
  TextField,
  TextLink,
} from 'braid-design-system';
import { Placeholder } from 'braid-design-system/playroom/components';

import type { PatternDocs } from '../../../../types';

const docs: PatternDocs = {
  description: (
    <Stack space="large">
      <Text>
        Displays a structured set of input fields that guides users through
        entering, validating, and submitting information.
      </Text>
    </Stack>
  ),
  alternatives: [
    {
      name: 'ContentBlock',
      description: 'For controlling content width.',
    },
    {
      name: 'Stepper',
      description: 'For guiding users through a multi-step task.',
    },
    {
      name: 'TextField',
      description: 'For standard, short-form text input.',
    },
  ],
  docSections: {
    appearance: [
      {
        label: 'Standard form',
        description: (
          <Text>
            Use <Strong>reserveMessageSpace</Strong> paired with a{' '}
            <Strong>small Stack</Strong> for spacing input fields, and a{' '}
            <Strong>large Stack</Strong> for spacing the actions from the input
            fields.
          </Text>
        ),
        Example: ({ getState, setState, setDefaultState, toggleState }) =>
          source(
            <>
              {setDefaultState('error', false)}
              {setDefaultState('textField', '')}
              {setDefaultState('dropdown', '')}
              {setDefaultState('month', {})}
              {setDefaultState('checkbox', false)}
              <PageBlock width="small">
                <Stack space="xlarge">
                  <Heading level="3">Heading</Heading>
                  <Stack space="large">
                    <Stack space="small">
                      <TextField
                        label="TextField"
                        value={getState('textField')}
                        onChange={setState('textField')}
                        reserveMessageSpace
                        tone={getState('error') ? 'critical' : undefined}
                        message={
                          getState('error') ? 'Required field' : undefined
                        }
                      />

                      <Dropdown
                        label="Dropdown"
                        value={getState('dropdown')}
                        onChange={setState('dropdown')}
                        reserveMessageSpace
                        tone={getState('error') ? 'critical' : undefined}
                        message={
                          getState('error') ? 'Required field' : undefined
                        }
                      >
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </Dropdown>

                      <MonthPicker
                        label="MonthPicker"
                        value={getState('month')}
                        onChange={setState('month')}
                        reserveMessageSpace
                        tone={getState('error') ? 'critical' : undefined}
                        message={
                          getState('error') ? 'Required field' : undefined
                        }
                      />

                      <Checkbox
                        label="Checkbox"
                        checked={getState('checkbox')}
                        onChange={setState('checkbox')}
                        reserveMessageSpace
                        tone={getState('error') ? 'critical' : undefined}
                        message={
                          getState('error') ? 'Required field' : undefined
                        }
                      />
                    </Stack>

                    <Actions>
                      <Button onClick={() => toggleState('error')}>
                        Submit
                      </Button>
                    </Actions>
                  </Stack>
                </Stack>
              </PageBlock>
            </>,
          ),
      },
    ],
    layout: [
      {
        label: 'Width',
        description: (
          <Text>
            Place the form within a{' '}
            <TextLink href="/components/ContentBlock">ContentBlock</TextLink> or{' '}
            <TextLink href="/components/PageBlock">PageBlock</TextLink> to
            constrain the width. Use size <Strong>small</Strong> so fields stay
            a manageable length. In special cases the width can be increased to{' '}
            <Strong>medium</Strong> to display larger blocks of content
            horizontally.
          </Text>
        ),
      },
      {
        label: 'Multi-page forms',
        description: (
          <Text>
            Break long forms into smaller steps using{' '}
            <TextLink href="/components/Stepper">Stepper</TextLink>. Display
            validation on each page as the user attempts to progress. Give
            controls to move forwards and backwards, and when possible allow the
            user to save their place and return later.
          </Text>
        ),
        Example: ({ getState, setState, setDefaultState }) =>
          source(
            <>
              {setDefaultState('progress', 2)}
              <ContentBlock width="small">
                <Stack space="medium">
                  <Stepper label="Linear steps" progress={getState('progress')}>
                    <Step>1. First step</Step>
                    <Step>2. Second step</Step>
                    <Step>3. Third step</Step>
                    <Step>4. Fourth step</Step>
                  </Stepper>
                  <Placeholder height={500} label="Form contents" />
                  <Hidden below="tablet">
                    <Columns space="none">
                      <Column>
                        <Inline space="small">
                          {getState('progress') > 1 ? (
                            <Button
                              icon={<IconArrow direction="left" />}
                              variant="soft"
                              onClick={() =>
                                setState('progress', getState('progress') - 1)
                              }
                            >
                              Back
                            </Button>
                          ) : null}
                        </Inline>
                      </Column>
                      <Column>
                        <Inline align="right" space="medium">
                          <Inline space="small">
                            <Button variant="transparent">Save draft</Button>
                            {getState('progress') < 4 ? (
                              <Button
                                variant="solid"
                                tone="formAccent"
                                icon={<IconArrow direction="right" />}
                                iconPosition="trailing"
                                onClick={() =>
                                  setState('progress', getState('progress') + 1)
                                }
                              >
                                Continue
                              </Button>
                            ) : null}
                            {getState('progress') > 3 ? (
                              <Button
                                icon={<IconSend />}
                                iconPosition="trailing"
                                tone="brandAccent"
                                onClick={() =>
                                  setState('progress', getState('progress') + 1)
                                }
                              >
                                Submit
                              </Button>
                            ) : null}
                          </Inline>
                        </Inline>
                      </Column>
                    </Columns>
                  </Hidden>
                  <Hidden above="mobile">
                    <Stack space="small">
                      <Columns space="xsmall">
                        <Column>
                          {getState('progress') > 1 ? (
                            <Button
                              icon={<IconArrow direction="left" />}
                              variant="soft"
                              onClick={() =>
                                setState('progress', getState('progress') - 1)
                              }
                            >
                              Back
                            </Button>
                          ) : null}
                        </Column>
                        <Column>
                          {getState('progress') < 4 ? (
                            <Button
                              variant="solid"
                              tone="formAccent"
                              icon={<IconArrow direction="right" />}
                              iconPosition="trailing"
                              onClick={() =>
                                setState('progress', getState('progress') + 1)
                              }
                            >
                              Continue
                            </Button>
                          ) : null}
                          {getState('progress') > 3 ? (
                            <Button
                              icon={<IconSend />}
                              iconPosition="trailing"
                              tone="brandAccent"
                              onClick={() =>
                                setState('progress', getState('progress') + 1)
                              }
                            >
                              Submit
                            </Button>
                          ) : null}
                        </Column>
                      </Columns>
                      <Button variant="transparent">Save draft</Button>
                    </Stack>
                  </Hidden>
                </Stack>
              </ContentBlock>
            </>,
          ),
      },
    ],
    interaction: [
      {
        label: 'Optional vs required fields',
        description: (
          <Text>
            Form fields are considered required unless marked as optional.
            Indicate a field is optional by labelling it in the{' '}
            <Strong>secondaryLabel</Strong> property.
          </Text>
        ),
      },
      {
        label: 'Validation',
        description: (
          <Stack space="xxlarge">
            <Stack space="large">
              <Heading level="4">Field level validation</Heading>
              <Text>
                Display field-level validation when the submit button is clicked
                by highlighting invalid fields using <Strong>message</Strong>{' '}
                and tone <Strong>critical</Strong>.
              </Text>
            </Stack>
            <Stack space="large">
              <Heading level="4">Reserve message space</Heading>
              <Text>
                Use <Strong>reserveMessageSpace</Strong> by default. This
                prevents elements from shifting when validation messages appear.
              </Text>
              <Text>
                For simple forms where validation errors are unlikely or where
                layout shift is acceptable, you can choose to leave it off. In
                those cases, use a <Strong>large Stack</Strong> for spacing
                input fields, and an <Strong>xlarge Stack</Strong> for spacing
                the actions from the input fields.
              </Text>
            </Stack>
          </Stack>
        ),
        Example: ({ getState, setState, setDefaultState, toggleState }) =>
          source(
            <>
              {setDefaultState('error', false)}
              {setDefaultState('textField', '')}
              {setDefaultState('dropdown', '')}
              {setDefaultState('month', {})}
              {setDefaultState('checkbox', false)}
              <PageBlock width="small">
                <Stack space="xlarge">
                  <Heading level="3">Heading</Heading>
                  <Stack space="large">
                    <TextField
                      label="TextField"
                      value={getState('textField')}
                      onChange={setState('textField')}
                      secondaryLabel="optional"
                    />

                    <Dropdown
                      label="Dropdown"
                      value={getState('dropdown')}
                      onChange={setState('dropdown')}
                      tone={getState('error') ? 'critical' : undefined}
                      message={getState('error') ? 'Required field' : undefined}
                    >
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </Dropdown>

                    <MonthPicker
                      label="MonthPicker"
                      value={getState('month')}
                      onChange={setState('month')}
                      secondaryLabel="optional"
                    />

                    <Checkbox
                      label="Checkbox"
                      checked={getState('checkbox')}
                      onChange={setState('checkbox')}
                    />
                  </Stack>

                  <Actions>
                    <Button
                      variant="ghost"
                      onClick={() => toggleState('error')}
                    >
                      Submit
                    </Button>
                  </Actions>
                </Stack>
              </PageBlock>
            </>,
          ),
      },
      {
        description: (
          <>
            <Heading level="4">Submit button behaviour</Heading>
            <Text>
              Avoid disabling the submit button when required fields are
              missing. That is not an accessible solution and doesn&rsquo;t tell
              the user how to fix the issue. Allow the user to attempt submit,
              then show field-level validation. When relevant, consider
              scrolling to the first error.
            </Text>
          </>
        ),
      },
    ],
    bestPractices: [
      {
        label: 'When to use',
        description: (
          <Stack space="xlarge">
            <Stack space="large">
              <Text>Use a form when:</Text>
              <List space="large">
                <Text>
                  users need to enter, validate, and submit information
                </Text>
                <Text>a task has multiple related fields.</Text>
              </List>
            </Stack>
            <Stack space="large">
              <Text>Don&rsquo;t use a form when:</Text>
              <List space="large">
                <Text>
                  users need to narrow a list rather than act on it (use{' '}
                  <TextLink href="/patterns/filters">Filters</TextLink>{' '}
                  instead).
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
