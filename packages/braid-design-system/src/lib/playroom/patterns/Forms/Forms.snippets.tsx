import source from '@braid-design-system/source.macro';

import type { PatternSnippets } from '../../../components/private/Snippets';
import {
  Actions,
  Button,
  Column,
  Columns,
  ContentBlock,
  Heading,
  Hidden,
  IconArrow,
  IconSend,
  Inline,
  Placeholder,
  Stack,
  Step,
  Stepper,
  TextField,
} from '../../components';

export const snippets: PatternSnippets = [
  {
    group: 'Patterns',
    name: 'Form',
    code: ({ getState, setState, setDefaultState }) =>
      source(
        <>
          {setDefaultState('shouldValidate', false)}
          {setDefaultState('Name', '')}
          {setDefaultState('RoleTitle', '')}
          {setDefaultState('textfield', '')}
          <ContentBlock width="small">
            <Stack space="xlarge">
              <Heading level="2">Form heading</Heading>
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
          </ContentBlock>
        </>,
      ),
  },
  {
    group: 'Patterns',
    name: 'Form (multi-page)',
    code: ({ getState, setState, setDefaultState }) =>
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
];
