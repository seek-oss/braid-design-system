import source from '@braid-design-system/source.macro';
import {
  Actions,
  Box,
  Button,
  Column,
  Columns,
  ContentBlock,
  Heading,
  Hidden,
  IconArrow,
  IconSend,
  Inline,
  Stack,
  Step,
  Stepper,
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
      Collect input through a set of fields on a page, sidebar or dialog.
    </Text>
  ),
  additional: [
    {
      description: (
        <Text>
          This page provides general advice for designing forms. If you have
          questions that aren&rsquo;t addressed here, reach out in{' '}
          <TextLink href="https://seekchat.slack.com/archives/CMBLA5Q1E">
            #braid-design-support
          </TextLink>
          .
        </Text>
      ),
    },
    {
      label: 'Appearance',
      Example: ({ getState, setState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('shouldValidate', false)}
            {setDefaultState('Name', '')}
            {setDefaultState('RoleTitle', '')}
            {setDefaultState('textfield', '')}
            <Stack space="xlarge">
              <Heading level="2">Heading example</Heading>
              <Stack space="large">
                <Stack space="small">
                  <TextField
                    label="Name"
                    onChange={setState('Name')}
                    value={getState('Name')}
                    reserveMessageSpace
                    message={
                      getState('shouldValidate') === true &&
                      getState('Name').length === 0
                        ? 'Enter your name'
                        : undefined
                    }
                    tone={
                      getState('shouldValidate') === true &&
                      getState('Name').length === 0
                        ? 'critical'
                        : undefined
                    }
                  />
                  <TextField
                    label="Role title"
                    onChange={setState('RoleTitle')}
                    value={getState('RoleTitle')}
                    reserveMessageSpace
                    message={
                      getState('shouldValidate') === true &&
                      getState('RoleTitle').length === 0
                        ? 'Enter your role title'
                        : undefined
                    }
                    tone={
                      getState('shouldValidate') === true &&
                      getState('RoleTitle').length === 0
                        ? 'critical'
                        : undefined
                    }
                  />
                  <TextField
                    label="Phone number"
                    onChange={setState('textfield')}
                    value={getState('textfield')}
                    secondaryLabel="optional"
                    reserveMessageSpace
                  />
                </Stack>
                <Actions>
                  <Button
                    variant="solid"
                    onClick={() => setState('shouldValidate', true)}
                  >
                    Submit
                  </Button>
                </Actions>
              </Stack>
            </Stack>
          </>,
        ),
    },
    {
      description: (
        <Text>
          To define form width, place it within a{' '}
          <TextLink href="/components/ContentBlock">ContentBlock</TextLink> (or{' '}
          <TextLink href="/components/PageBlock">PageBlock</TextLink>). Use size{' '}
          <Strong>small</Strong> so fields stay a manageable length. In special
          cases the width can be increased to <Strong>medium</Strong> to display
          larger blocks of content horizontally.
        </Text>
      ),
    },
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
        <>
          <Text>
            Display field-level validation when the submit button is clicked by
            highlighting invalid fields using <Strong>message</Strong> and tone{' '}
            <Strong>critical</Strong>.
          </Text>
          <Text>
            If a form has several required fields, consider{' '}
            <Strong>reserveMessageSpace</Strong>. This reserves space below the
            field and keeps content from shifting when a validation message
            appears. Take the same approach for all fields so they display
            evenly. If a form has few or no required fields, it may not be
            necessary.
          </Text>
        </>
      ),
      Example: ({ getState, setState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('shouldValidate', false)}
            {setDefaultState('Name', '')}
            {setDefaultState('RoleTitle', '')}
            {setDefaultState('shouldValidate2', false)}
            {setDefaultState('Name2', '')}
            {setDefaultState('RoleTitle2', '')}
            {setDefaultState('textfield', '')}
            <Columns space="gutter" collapseBelow="tablet">
              <Column>
                <Box padding="xlarge" boxShadow="borderNeutralLight">
                  <Stack space="xlarge">
                    <Stack space="small">
                      <Heading level="4">With reserve message space</Heading>
                      <Text>Stack space = medium</Text>
                    </Stack>
                    <Stack space="medium">
                      <TextField
                        label="Name"
                        onChange={setState('Name')}
                        value={getState('Name')}
                        reserveMessageSpace
                        message={
                          getState('shouldValidate') === true &&
                          getState('Name').length === 0
                            ? 'Enter your name'
                            : undefined
                        }
                        tone={
                          getState('shouldValidate') === true &&
                          getState('Name').length === 0
                            ? 'critical'
                            : undefined
                        }
                      />
                      <TextField
                        label="Role title"
                        onChange={setState('RoleTitle')}
                        value={getState('RoleTitle')}
                        reserveMessageSpace
                        message={
                          getState('shouldValidate') === true &&
                          getState('RoleTitle').length === 0
                            ? 'Enter your role title'
                            : undefined
                        }
                        tone={
                          getState('shouldValidate') === true &&
                          getState('RoleTitle').length === 0
                            ? 'critical'
                            : undefined
                        }
                      />
                      <TextField
                        label="Phone number"
                        onChange={setState('textfield')}
                        value={getState('textfield')}
                        secondaryLabel="optional"
                        reserveMessageSpace
                      />
                      <Actions>
                        <Button
                          variant="solid"
                          onClick={() => setState('shouldValidate', true)}
                        >
                          Submit
                        </Button>
                      </Actions>
                    </Stack>
                  </Stack>
                </Box>
              </Column>
              <Column>
                <Box padding="xlarge" boxShadow="borderNeutralLight">
                  <Stack space="xlarge">
                    <Stack space="small">
                      <Heading level="4">Without reserve message space</Heading>
                      <Text>Stack space = medium</Text>
                    </Stack>
                    <Stack space="medium">
                      <TextField
                        label="Name"
                        onChange={setState('Name2')}
                        value={getState('Name2')}
                        message={
                          getState('shouldValidate2') === true &&
                          getState('Name2').length === 0
                            ? 'Enter your name'
                            : undefined
                        }
                        tone={
                          getState('shouldValidate2') === true &&
                          getState('Name2').length === 0
                            ? 'critical'
                            : undefined
                        }
                      />
                      <TextField
                        label="Role title"
                        onChange={setState('RoleTitle2')}
                        value={getState('RoleTitle2')}
                        message={
                          getState('shouldValidate2') === true &&
                          getState('RoleTitle2').length === 0
                            ? 'Enter your role title'
                            : undefined
                        }
                        tone={
                          getState('shouldValidate2') === true &&
                          getState('RoleTitle2').length === 0
                            ? 'critical'
                            : undefined
                        }
                      />
                      <TextField
                        label="Phone number"
                        onChange={setState('textfield')}
                        value={getState('textfield')}
                        secondaryLabel="optional"
                        reserveMessageSpace
                      />
                      <Actions>
                        <Button
                          variant="solid"
                          onClick={() => setState('shouldValidate2', true)}
                        >
                          Submit
                        </Button>
                      </Actions>
                    </Stack>
                  </Stack>
                </Box>
              </Column>
            </Columns>
          </>,
        ),
    },
    {
      description: (
        <Text>
          Avoid disabling the submit button when required fields are missing.
          That is not an accessible solution and doesn&rsquo;t tell the user how
          to fix the issue. Allow the user to attempt submit, then show
          field-level validation. When relevant, consider scrolling to the first
          error.
        </Text>
      ),
    },
    {
      label: 'Multi-page forms',
      description: (
        <Text>
          When designing very long forms, break the form into steps using{' '}
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
            <Box padding="medium" background="surface">
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
            </Box>
          </>,
        ),
    },
  ],
};

export default docs;
