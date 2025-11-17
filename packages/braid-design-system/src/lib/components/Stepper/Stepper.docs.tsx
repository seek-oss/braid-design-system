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
      A progress indicator that guides users through multi-step tasks and
      enables navigation between steps.
    </Text>
  ),
  subComponents: ['Step'],
  Example: () =>
    source(
      <Stepper label="Steps example" progress={3}>
        <Step>1. First step</Step>
        <Step>2. Second step</Step>
        <Step>3. Third step</Step>
        <Step>4. Forth step</Step>
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
            The Stepper is center-aligned by default, but this can be customised
            via the <Strong>align</Strong> prop.
          </Text>
          <Notice>
            <Text>
              The alignment is always set to <Strong>left</Strong> on mobile due
              to space constraints with step labels.
            </Text>
          </Notice>
        </>
      ),
      Example: () =>
        source(
          <Stepper align="left" label="Left aligned" progress={2}>
            <Step>1. First step</Step>
            <Step>2. Second step</Step>
            <Step>3. Third step</Step>
          </Stepper>,
        ),
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
      label: 'Button placement',
      description: (
        <>
          <Text>
            It&rsquo;s recommended to display “Back” on the left and “Continue”
            on the right. Resize your browser window to see responsive
            behaviour.
          </Text>
        </>
      ),
      Example: ({ setDefaultState, setState, getState }) =>
        source(
          <>
            {setDefaultState('progress', 1)}
            <Stack space="large">
              <Stepper label="Linear steps" progress={getState('progress')}>
                <Step>1. First step</Step>
                <Step>2. Second step</Step>
                <Step>3. Third step</Step>
                <Step>4. Forth step</Step>
              </Stepper>
              <Placeholder height="300" label="Content" />
              <Hidden below="tablet">
                <Columns space="small">
                  <Column>
                    <Inline space="small">
                      {getState('progress') > 1 ? (
                        <Button
                          variant="soft"
                          onClick={() =>
                            setState('progress', getState('progress') - 1)
                          }
                        >
                          <IconArrow direction="left" /> Back
                        </Button>
                      ) : null}
                    </Inline>
                  </Column>
                  <Column>
                    <Inline space="small" align="right">
                      <Button variant="transparent">Save draft</Button>
                      {getState('progress') < 4 ? (
                        <Button
                          variant="solid"
                          tone="formAccent"
                          onClick={() =>
                            setState('progress', getState('progress') + 1)
                          }
                        >
                          Continue <IconArrow direction="right" />
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
                  </Column>
                </Columns>
              </Hidden>
              <Hidden above="mobile">
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

                <Box paddingTop="small">
                  <Button variant="transparent">Save draft</Button>
                </Box>
              </Hidden>
            </Stack>
          </>,
        ),
    },
    {
      label: 'Linear mode',
      description: (
        <Text>
          By default the <Strong>mode</Strong> is set to <Strong>linear</Strong>
          , requiring a step number be passed to the <Strong>progress</Strong>{' '}
          prop indicating how far through the process the user is.
        </Text>
      ),
      Example: ({ setDefaultState, setState, getState }) =>
        source(
          <>
            {setDefaultState('progress', 1)}
            <Stack space="large">
              <Stepper label="Linear steps" progress={getState('progress')}>
                <Step>1. First step</Step>
                <Step>2. Second step</Step>
                <Step>3. Third step</Step>
                <Step>4. Forth step</Step>
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
        ),
    },
    {
      label: 'Non-linear mode',
      description: (
        <>
          <Text>
            For cases where the steps are not necessarily sequential, the{' '}
            <Strong>mode</Strong> can be set to <Strong>non-linear</Strong>.
          </Text>
          <Text>
            In this mode, the <Strong>activeStep</Strong> prop is required and
            the completion of an individual step can be controlled by providing
            the <Strong>complete</Strong> prop to the <Strong>Step</Strong>{' '}
            itself.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Stepper label="Non-linear steps" mode="non-linear" activeStep={2}>
            <Step>1. First step</Step>
            <Step>2. Second step</Step>
            <Step complete>3. Third step</Step>
            <Step>4. Forth step</Step>
          </Stepper>,
        ),
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
      Example: ({ setDefaultState, getState, setState }) =>
        source(
          <>
            {setDefaultState('complete', {})}
            <Stack space="large">
              <Text tone="secondary" size="small">
                Click on a step to toggle its completion status:
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
                  4. Forth step
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
        ),
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
      Example: ({ setDefaultState, getState, setState }) =>
        source(
          <>
            {setDefaultState('activeStep', 2)}
            <Stack space="large">
              <Text tone="secondary" size="small">
                Click on a step to set it as the active step:
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
                <Step>4. Forth step</Step>
                <Step>5. Fifth step</Step>
                <Step>6. Sixth step</Step>
              </Stepper>
            </Stack>
          </>,
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
