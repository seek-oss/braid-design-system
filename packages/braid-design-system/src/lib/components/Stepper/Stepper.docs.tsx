import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import {
  Box,
  Button,
  Column,
  Columns,
  Hidden,
  IconArrow,
  IconChevron,
  IconLanguage,
  IconSend,
  Inline,
  List,
  Notice,
  Stack,
  Strong,
  Text,
  TextLink,
} from '..';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

import { Step } from './Step';
import { Stepper } from './Stepper';

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <Text>
      A progress indicator that guides users through multi-step tasks by
      displaying position and completion status.
    </Text>
  ),
  subComponents: ['Step'],
  Example: () =>
    source(
      <Stepper label="Steps example" progress={3}>
        <Step>1. First step</Step>
        <Step>2. Second step</Step>
        <Step>3. Third step</Step>
        <Step>4. Fourth step</Step>
        <Step>5. Fifth step</Step>
      </Stepper>,
    ),
  accessibility: (
    <>
      <Text>
        Renders a semantic <Strong>nav</Strong> element to encapsulate the step
        links. Given this is a{' '}
        <TextLink href="https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/">
          Landmark Region
        </TextLink>
        , in order to comply with the{' '}
        <TextLink href="https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/#x4-2-general-principles-of-landmark-design">
          General Principles of Landmark Design
        </TextLink>{' '}
        it is necessary for it to have an <Strong>aria-label</Strong>.
      </Text>
      <Text tone="promote" id="translations">
        <IconLanguage title="Translation hint" titleId="translations" /> The{' '}
        <Strong>aria-label</Strong> can be customised by providing the{' '}
        <Strong>label</Strong> prop.
      </Text>
      <Text>
        Implements the{' '}
        <TextLink href="https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#x6-6-keyboard-navigation-inside-components">
          roving tabindex
        </TextLink>{' '}
        pattern when the steps are interactive (
        <TextLink href="#step-interactions">see below</TextLink>).
      </Text>
      <Text>
        When used in <Strong>linear</Strong> mode (default), the{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-1.2/#progressbar">
          progressbar
        </TextLink>{' '}
        role is implemented, providing the additional context of progression
        within the defined flow to screen readers.
      </Text>
    </>
  ),
  alternatives: [],
  additional: [
    {
      label: 'Alignment',
      description: (
        <>
          <Text>
            The Stepper is center-aligned by default, positioning it at the
            center of its container with step labels center-aligned to their
            corresponding steps.
          </Text>
        </>
      ),
      Example: () => {
        const { value: visual } = source(
          <Stack space="large">
            <Text tone="secondary" size="small">
              Default alignment (center)
            </Text>
            <Stepper label="Default alignment" progress={2}>
              <Step>1. First step</Step>
              <Step>2. Second step</Step>
              <Step>3. Third step</Step>
            </Stepper>
          </Stack>,
        );

        const { code: codeDemo } = source(
          <Stepper label="Default alignment" progress={2}>
            <Step>1. First step</Step>
            <Step>2. Second step</Step>
            <Step>3. Third step</Step>
          </Stepper>,
        );

        return {
          code: codeDemo,
          value: visual,
        };
      },
    },
    {
      description: (
        <>
          <Text>
            To align the Stepper to the left of its container, set the{' '}
            <Strong>align</Strong> prop to <Strong>left</Strong>. This will also
            left-align step labels to their corresponding steps.
          </Text>
          <Notice>
            <Text>
              Note that alignment is always set to <Strong>left</Strong> on
              mobile due to space constraints with step labels.
            </Text>
          </Notice>
        </>
      ),
      Example: () => {
        const { value: visual } = source(
          <Stack space="large">
            <Text tone="secondary" size="small">
              Left aligned
            </Text>
            <Stepper align="left" label="Left aligned" progress={2}>
              <Step>1. First step</Step>
              <Step>2. Second step</Step>
              <Step>3. Third step</Step>
            </Stepper>
          </Stack>,
        );

        const { code: codeDemo } = source(
          <Stepper align="left" label="Left aligned" progress={2}>
            <Step>1. First step</Step>
            <Step>2. Second step</Step>
            <Step>3. Third step</Step>
          </Stepper>,
        );

        return {
          code: codeDemo,
          value: visual,
        };
      },
    },
    {
      label: 'Tone',
      description: (
        <>
          <Text>
            The Stepper can be de-emphasized by setting the{' '}
            <Strong>tone</Strong> to <Strong>neutral</Strong>.
          </Text>
          <Text>
            This makes the highlight colour follow the default text colour,
            including inverting on dark surfaces to improve contrast.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Stepper tone="neutral" label="De-emphasized the tone" progress={2}>
            <Step>1. First step</Step>
            <Step>2. Second step</Step>
            <Step>3. Third step</Step>
          </Stepper>,
        ),
    },
    {
      label: 'Linear mode',
      description: (
        <Text>
          The default <Strong>mode</Strong> is <Strong>linear</Strong>, which
          requires each step be completed before advancing. This mode requires a
          step number be passed to the <Strong>progress</Strong> prop to
          indicate the user&rsquo;s progress.
        </Text>
      ),
      Example: ({ setDefaultState, setState, getState }) => {
        const { value: visual } = source(
          <>
            {setDefaultState('progress', 1)}
            <Stack space="large">
              <Text tone="secondary" size="small">
                Use the buttons to move between steps and update their
                completion status
              </Text>
              <Stepper label="Linear steps" progress={getState('progress')}>
                <Step>1. First step</Step>
                <Step>2. Second step</Step>
                <Step>3. Third step</Step>
                <Step>4. Fourth step</Step>
              </Stepper>
              <Columns space="small">
                <Column>
                  <Inline space="small" align="right">
                    {getState('progress') > 1 ? (
                      <Button
                        size="small"
                        variant="ghost"
                        onClick={() =>
                          setState('progress', getState('progress') - 1)
                        }
                      >
                        <IconChevron direction="left" /> Back
                      </Button>
                    ) : null}
                  </Inline>
                </Column>
                <Column>
                  <Inline space="small">
                    {getState('progress') < 4 ? (
                      <Button
                        size="small"
                        onClick={() =>
                          setState('progress', getState('progress') + 1)
                        }
                      >
                        Next <IconChevron direction="right" />
                      </Button>
                    ) : null}
                  </Inline>
                </Column>
              </Columns>
            </Stack>
          </>,
        );

        const { code: codeDemo } = source(
          <>
            {setDefaultState('progress', 1)}
            <Stack space="large">
              <Stepper label="Linear steps" progress={getState('progress')}>
                <Step>1. First step</Step>
                <Step>2. Second step</Step>
                <Step>3. Third step</Step>
                <Step>4. Fourth step</Step>
              </Stepper>
              <Columns space="small">
                <Column>
                  <Inline space="small" align="right">
                    {getState('progress') > 1 ? (
                      <Button
                        size="small"
                        variant="ghost"
                        onClick={() =>
                          setState('progress', getState('progress') - 1)
                        }
                      >
                        <IconChevron direction="left" /> Back
                      </Button>
                    ) : null}
                  </Inline>
                </Column>
                <Column>
                  <Inline space="small">
                    {getState('progress') < 4 ? (
                      <Button
                        size="small"
                        onClick={() =>
                          setState('progress', getState('progress') + 1)
                        }
                      >
                        Next <IconChevron direction="right" />
                      </Button>
                    ) : null}
                  </Inline>
                </Column>
              </Columns>
            </Stack>
          </>,
        );

        return {
          code: codeDemo,
          value: visual,
        };
      },
    },
    {
      label: 'Non-linear mode',
      description: (
        <>
          <Text>
            For non-sequential steps, the <Strong>mode</Strong> can be set to{' '}
            <Strong>non-linear</Strong>. This allows users to navigate between
            steps regardless of completion.
          </Text>
          <Text>
            In this mode, the <Strong>activeStep</Strong> prop is required and
            individual step completion can be controlled via the{' '}
            <Strong>complete</Strong> prop on the <Strong>Step</Strong> itself.
          </Text>
        </>
      ),
      Example: ({ setDefaultState, setState, getState }) => {
        const { value: visual } = source(
          <>
            {setDefaultState('activeStep', 2)}
            <Stack space="large">
              <Text tone="secondary" size="small">
                Use the buttons to move between steps without changing their
                completion status
              </Text>
              <Stepper
                mode="non-linear"
                label="Non-linear steps"
                activeStep={getState('activeStep')}
              >
                <Step>1. First step</Step>
                <Step>2. Second step</Step>
                <Step complete>3. Third step</Step>
                <Step>4. Fourth step</Step>
              </Stepper>
              <Columns space="small">
                <Column>
                  <Inline space="small" align="right">
                    {getState('activeStep') > 1 ? (
                      <Button
                        size="small"
                        variant="ghost"
                        onClick={() =>
                          setState('activeStep', getState('activeStep') - 1)
                        }
                      >
                        <IconChevron direction="left" /> Back
                      </Button>
                    ) : null}
                  </Inline>
                </Column>
                <Column>
                  <Inline space="small">
                    {getState('activeStep') < 4 ? (
                      <Button
                        size="small"
                        onClick={() =>
                          setState('activeStep', getState('activeStep') + 1)
                        }
                      >
                        Next <IconChevron direction="right" />
                      </Button>
                    ) : null}
                  </Inline>
                </Column>
              </Columns>
            </Stack>
          </>,
        );

        const { code: codeDemo } = source(
          <>
            {setDefaultState('activeStep', 2)}
            <Stack space="large">
              <Stepper
                mode="non-linear"
                label="Non-linear steps"
                activeStep={getState('activeStep')}
              >
                <Step>1. First step</Step>
                <Step>2. Second step</Step>
                <Step complete>3. Third step</Step>
                <Step>4. Fourth step</Step>
              </Stepper>
              <Columns space="small">
                <Column>
                  <Inline space="small" align="right">
                    {getState('activeStep') > 1 ? (
                      <Button
                        size="small"
                        variant="ghost"
                        onClick={() =>
                          setState('activeStep', getState('activeStep') - 1)
                        }
                      >
                        <IconChevron direction="left" /> Back
                      </Button>
                    ) : null}
                  </Inline>
                </Column>
                <Column>
                  <Inline space="small">
                    {getState('activeStep') < 4 ? (
                      <Button
                        size="small"
                        onClick={() =>
                          setState('activeStep', getState('activeStep') + 1)
                        }
                      >
                        Next <IconChevron direction="right" />
                      </Button>
                    ) : null}
                  </Inline>
                </Column>
              </Columns>
            </Stack>
          </>,
        );

        return {
          code: codeDemo,
          value: visual,
        };
      },
    },
    {
      label: 'Step interactions',
      description: (
        <>
          <Text>
            Steps can be made interactive by providing a handler via the{' '}
            <Strong>onStepClick</Strong> prop. This function receives the{' '}
            <Strong>stepNumber</Strong> and the <Strong>id</Strong> (as provided
            to the <Strong>Step</Strong> component itself).
          </Text>
          <Notice>
            <Text>
              In linear mode, a user can only interact with previous steps, e.g.
              steps that come before the current <Strong>progress</Strong>.
            </Text>
          </Notice>
        </>
      ),
      Example: ({ setDefaultState, getState, setState }) => {
        const { value: visual } = source(
          <>
            {setDefaultState('complete', {})}
            <Stack space="large">
              <Text tone="secondary" size="small">
                Click on a step to toggle its completion status
              </Text>
              <Stepper
                label="Interactions"
                mode="non-linear"
                activeStep={1}
                onStepClick={({ id }) => {
                  if (id) {
                    setState('complete', {
                      ...getState('complete'),
                      [id]: !getState('complete')[id],
                    });
                  }
                }}
              >
                <Step id={1} complete={getState('complete')[1]}>
                  1. First step
                </Step>
                <Step id={2} complete={getState('complete')[2]}>
                  2. Second step
                </Step>
                <Step id={3} complete={getState('complete')[3]}>
                  3. Third step
                </Step>
                <Step id={4} complete={getState('complete')[4]}>
                  4. Fourth step
                </Step>
                <Step id={5} complete={getState('complete')[5]}>
                  5. Fifth step
                </Step>
                <Step id={6} complete={getState('complete')[6]}>
                  6. Sixth step
                </Step>
              </Stepper>
            </Stack>
          </>,
        );

        const { code: codeDemo } = source(
          <>
            {setDefaultState('complete', {})}
            <Stack space="large">
              <Stepper
                label="Interactions"
                mode="non-linear"
                activeStep={1}
                onStepClick={({ id }) => {
                  if (id) {
                    setState('complete', {
                      ...getState('complete'),
                      [id]: !getState('complete')[id],
                    });
                  }
                }}
              >
                <Step id={1} complete={getState('complete')[1]}>
                  1. First step
                </Step>
                <Step id={2} complete={getState('complete')[2]}>
                  2. Second step
                </Step>
                <Step id={3} complete={getState('complete')[3]}>
                  3. Third step
                </Step>
                <Step id={4} complete={getState('complete')[4]}>
                  4. Fourth step
                </Step>
                <Step id={5} complete={getState('complete')[5]}>
                  5. Fifth step
                </Step>
                <Step id={6} complete={getState('complete')[6]}>
                  6. Sixth step
                </Step>
              </Stepper>
            </Stack>
          </>,
        );

        return {
          code: codeDemo,
          value: visual,
        };
      },
    },
    {
      label: 'Setting the active step',
      description: (
        <>
          <Text>
            In <Strong>linear</Strong> mode, the step number passed to the{' '}
            <Strong>progress</Strong> prop will also be the active step. Any
            previous step can be made active using the{' '}
            <Strong>activeStep</Strong> prop.
          </Text>
          <Text>
            In <Strong>non-linear</Strong> mode, the <Strong>activeStep</Strong>{' '}
            prop is required to set the starting point.
          </Text>
        </>
      ),
      Example: ({ setDefaultState, getState, setState }) => {
        const { value: visual } = source(
          <>
            {setDefaultState('activeStep', 2)}
            <Stack space="large">
              <Text tone="secondary" size="small">
                Click on a step to set it as the active step
              </Text>
              <Stepper
                label="Linear steps"
                progress={5}
                activeStep={getState('activeStep')}
                onStepClick={({ stepNumber }) =>
                  setState('activeStep', stepNumber)
                }
              >
                <Step>1. First step</Step>
                <Step>2. Second step</Step>
                <Step>3. Third step</Step>
                <Step>4. Fourth step</Step>
                <Step>5. Fifth step</Step>
                <Step>6. Sixth step</Step>
              </Stepper>
            </Stack>
          </>,
        );

        const { code: codeDemo } = source(
          <>
            {setDefaultState('activeStep', 2)}
            <Stack space="large">
              <Stepper
                label="Linear steps"
                progress={5}
                activeStep={getState('activeStep')}
                onStepClick={({ stepNumber }) =>
                  setState('activeStep', stepNumber)
                }
              >
                <Step>1. First step</Step>
                <Step>2. Second step</Step>
                <Step>3. Third step</Step>
                <Step>4. Fourth step</Step>
                <Step>5. Fifth step</Step>
                <Step>6. Sixth step</Step>
              </Stepper>
            </Stack>
          </>,
        );

        return {
          code: codeDemo,
          value: visual,
        };
      },
    },
    {
      label: 'Providing user controls',
      description: (
        <>
          <Text>
            We recommend providing &quot;Back&quot; and &quot;Continue&quot;
            buttons for the user to navigate through the steps. When relevant,
            you may also want to provide a &quot;Save&quot; button so the user
            can return to their progress later.
          </Text>
          <Text>
            Regardless of the actions you provide, consider which are most
            important and apply an appropriate visual hierarchy using variants{' '}
            <Strong>solid</Strong>, <Strong>ghost</Strong>,{' '}
            <Strong>soft</Strong> and <Strong>transparent</Strong>.
          </Text>
          <Notice>
            <Text>Resize your browser window to see responsive behaviour.</Text>
          </Notice>
        </>
      ),
      Example: ({ setDefaultState, setState, getState }) =>
        source(
          <>
            {setDefaultState('progress', 2)}
            <Stack space="large">
              <Stepper label="Linear steps" progress={getState('progress')}>
                <Step>1. First step</Step>
                <Step>2. Second step</Step>
                <Step>3. Third step</Step>
                <Step>4. Fourth step</Step>
              </Stepper>
              <Placeholder height="200" label="Content" />
              <Hidden below="tablet">
                <Columns space="small">
                  <Column>
                    {getState('progress') > 1 ? (
                      <Inline space="small">
                        <Button
                          variant="soft"
                          onClick={() =>
                            setState('progress', getState('progress') - 1)
                          }
                        >
                          <IconArrow direction="left" /> Back
                        </Button>
                      </Inline>
                    ) : null}
                  </Column>
                  <Column width="content">
                    <Inline space="small">
                      <Button variant="transparent">Save draft</Button>
                      <Button
                        variant="solid"
                        tone={
                          getState('progress') < 4
                            ? 'formAccent'
                            : 'brandAccent'
                        }
                        onClick={() =>
                          setState('progress', getState('progress') + 1)
                        }
                      >
                        {getState('progress') < 4 ? (
                          <>
                            Continue <IconArrow direction="right" />
                          </>
                        ) : (
                          <>
                            Submit <IconSend />
                          </>
                        )}
                      </Button>
                    </Inline>
                  </Column>
                </Columns>
              </Hidden>
              <Hidden above="mobile">
                <Columns space="xsmall">
                  {getState('progress') > 1 ? (
                    <Column>
                      <Button
                        icon={<IconArrow direction="left" />}
                        variant="soft"
                        onClick={() =>
                          setState('progress', getState('progress') - 1)
                        }
                      >
                        Back
                      </Button>
                    </Column>
                  ) : null}
                  <Column>
                    <Button
                      variant="solid"
                      tone={
                        getState('progress') < 4 ? 'formAccent' : 'brandAccent'
                      }
                      onClick={() =>
                        setState('progress', getState('progress') + 1)
                      }
                    >
                      {getState('progress') < 4 ? (
                        <>
                          Continue <IconArrow direction="right" />
                        </>
                      ) : (
                        <>
                          Submit <IconSend />
                        </>
                      )}
                    </Button>
                  </Column>
                </Columns>
                <Box paddingTop="small">
                  <Button variant="transparent">Save draft</Button>
                </Box>
              </Hidden>
            </Stack>
          </>,
        ),
    },
    {
      description: (
        <>
          <Text>
            When designing in a language other than english, the button word
            lengths may become too long to fit side by side on mobile. If this
            is the case, you can stack buttons vertically with “Continue” on the
            top followed by “Back” then “Save”.
          </Text>
        </>
      ),
    },
    {
      label: 'When to use',
      description: (
        <Stack space="xlarge">
          <Stack space="large">
            <Text>Use a Stepper:</Text>
            <List space="large">
              <Text>
                to guide users through complex, multi-step tasks or processes.
              </Text>
            </List>
          </Stack>
          <Stack space="large">
            <Text>Don&rsquo;t use a Stepper:</Text>
            <List space="large">
              <Text>
                if the task only requires one or two straightforward actions.
              </Text>
            </List>
          </Stack>
        </Stack>
      ),
    },
    dataAttributeDocs({
      code: `
        <Stepper
          data={{ testid: 'stepper-1' }}
          // => data-testid="stepper-1"
        >
          ...
        </Stepper>
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
