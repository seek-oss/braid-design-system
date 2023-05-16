import assert from 'assert';
import React, { type ReactElement, Children } from 'react';
import flattenChildren from '../../utils/flattenChildren';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { Hidden } from '../Hidden/Hidden';
import {
  type StepperMode,
  type StepperTone,
  StepContext,
  StepperContextProvider,
} from './StepperContext';
import type { Step as StepComponent, StepProps } from './Step';
import * as styles from './Stepper.css';

type LinearProps = {
  mode?: 'linear';
  progress: number;
  activeStep?: number;
};

type NonLinearProps = {
  mode: 'non-linear';
  activeStep: number;
};

type Step = ReactElement<StepProps, typeof StepComponent>;

type StepperProps = {
  label: string;
  children: Array<Step> | Step;
  mode?: StepperMode;
  tone?: StepperTone;
  onStepClick?: (step: { id?: string | number; stepNumber: number }) => void;
  data?: DataAttributeMap;
  id?: string;
  align?: 'left' | 'center';
} & (LinearProps | NonLinearProps);

const resolveActiveStep = (
  mode: StepperMode,
  progress: number,
  activeStep?: number,
) => {
  if (
    mode === 'linear' &&
    (typeof activeStep === 'undefined' || activeStep > progress)
  ) {
    return progress;
  }
  return activeStep || 0;
};

export const Stepper = ({
  activeStep,
  label,
  mode = 'linear',
  tone,
  children,
  data,
  align = 'center',
  id,
  onStepClick,
  ...restProps
}: StepperProps) => {
  const steps = flattenChildren(children) as Array<Step>;
  const stepCount = steps.length;
  const isLinear = mode === 'linear';
  const progress = 'progress' in restProps ? restProps.progress : 0;
  const activeStepNumber = resolveActiveStep(mode, progress, activeStep);

  let stepName = '';
  const stepItems = Children.map(steps, (child, index) => {
    const stepNumber = index + 1;
    const isLast = stepNumber === stepCount;

    assert(
      !child || child.type.__isStep__,
      'Only Step elements can be direct children of a Stepper. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/Stepper',
    );

    if (stepNumber === activeStepNumber && typeof child === 'object') {
      stepName = child.props.children;
    }

    return (
      <StepContext.Provider
        value={{
          stepNumber,
          isLast,
        }}
      >
        <Box
          component="li"
          className={[
            !isLast ? styles.stretch : undefined,
            isLast && align === 'center'
              ? styles.stretchLastAboveTablet
              : undefined,
          ]}
        >
          {child}
        </Box>
      </StepContext.Provider>
    );
  });

  return (
    <StepperContextProvider
      activeStep={activeStepNumber}
      tone={tone}
      align={align}
      progress={progress}
      stepCount={stepItems.length}
      isLinear={isLinear}
      onStepClick={onStepClick}
    >
      <Box
        component="nav"
        position="relative"
        aria-label={label}
        id={id}
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        <Box
          component="ol"
          display="flex"
          paddingBottom={{ mobile: 'medium', tablet: 'none' }}
          justifyContent={{
            mobile: 'spaceBetween',
            tablet: align === 'center' ? 'center' : undefined,
          }}
        >
          {stepItems}
        </Box>
        {isLinear ? (
          <Box
            component="span"
            position="absolute"
            pointerEvents="none"
            className={styles.progressTrack}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={stepCount - 1}
            aria-valuenow={progress > 0 ? progress - 1 : undefined}
            aria-valuetext={progress > 0 ? label : undefined}
            style={{
              left: `${(100 - ((stepCount - 1) / stepCount) * 100) / 2}%`,
              width: `${((progress - 1) / stepCount) * 100}%`,
            }}
          />
        ) : null}
        <Hidden above="mobile">
          <Text weight="strong">{stepName}</Text>
        </Hidden>
      </Box>
    </StepperContextProvider>
  );
};
