import React from 'react';
import source from '../../utils/source.macro';
import { ComponentDocs } from '../../../site/src/types';
import { Step } from './Step';
import { Stepper } from './Stepper';
import {
  Button,
  IconChevron,
  Inline,
  Notice,
  Stack,
  Strong,
  Text,
  TextLink,
} from '..';

const docs: ComponentDocs = {
  category: 'Content',
  subComponents: ['Step'],
  Example: () =>
    source(
      <Stepper label="Steps example" progress={3}>
        {[
          '1. First step',
          '2. Second step',
          '3. Third step',
          '4. Forth step',
          '5. Fifth step',
        ].map((step) => (
          <Step key={step}>{step}</Step>
        ))}
      </Stepper>,
    ),
  accessibility: (
    <>
      <Text>
        Renders a semantic <Strong>nav</Strong> element to encapsulate the step
        links. Given this is a{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.2/#aria_landmark">
          Landmark Region
        </TextLink>
        , in order to comply with the{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.2/#general-principles-of-landmark-design">
          General Principles of Landmark Design
        </TextLink>{' '}
        it is neccessary to provide a <Strong>label</Strong>.
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
            <Stack space="medium">
              <Stepper label="Linear steps" progress={getState('progress')}>
                {[
                  '1. First step',
                  '2. Second step',
                  '3. Third step',
                  '4. Forth step',
                ].map((step) => (
                  <Step key={step}>{step}</Step>
                ))}
              </Stepper>
              <Inline space="small" align="center">
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
            {[
              '1. First step',
              '2. Second step',
              '3. Third step',
              '4. Forth step',
            ].map((step, index) => (
              <Step key={step} complete={index === 3}>
                {step}
              </Step>
            ))}
          </Stepper>,
        ),
    },
    {
      label: 'Step interactions',
      description: (
        <>
          <Text>
            Steps can be made interactive by providing a handler via the{' '}
            <Strong>onStepClick</Strong> prop. This function recieves the{' '}
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
                activeStep={3}
                onStepClick={({ id = '' }) =>
                  setState('complete', {
                    ...getState('complete'),
                    [id]: !getState('complete')[id],
                  })
                }
              >
                {[
                  '1. First step',
                  '2. Second step',
                  '3. Third step',
                  '4. Forth step',
                  '5. Fifth step',
                  '6. Sixth step',
                ].map((step) => (
                  <Step
                    key={step}
                    id={step}
                    complete={getState('complete')[step]}
                  >
                    {step}
                  </Step>
                ))}
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
            <Strong>progress</Strong> prop will also be the active step, however
            this may be overridden by passing an explicit step number via the{' '}
            <Strong>activeStep</Strong> prop.
          </Text>
          <Text>
            In <Strong>non-linear</Strong> mode, the <Strong>activeStep</Strong>{' '}
            prop is a requirement.
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
                {[
                  '1. First step',
                  '2. Second step',
                  '3. Third step',
                  '4. Forth step',
                  '5. Fifth step',
                  '6. Sixth step',
                ].map((step) => (
                  <Step key={step}>{step}</Step>
                ))}
              </Stepper>
            </Stack>
          </>,
        ),
    },
    {
      label: 'De-emphasizing the tone',
      description: (
        <>
          <Text>
            The Stepper can be de-emphasized by setting the{' '}
            <Strong>tone</Strong> to <Strong>neutral</Strong>.
          </Text>
          <Text>
            This makes the highlight colour follow the default text colour,
            including{' '}
            <TextLink href="#contextual-design">
              inverting on dark surfaces
            </TextLink>{' '}
            to improve contrast.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Stepper tone="neutral" label="De-emphasized the tone" progress={2}>
            {['1. First step', '2. Second step', '3. Third step'].map(
              (step) => (
                <Step key={step} id={step}>
                  {step}
                </Step>
              ),
            )}
          </Stepper>,
        ),
    },
  ],
};

export default docs;
