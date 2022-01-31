import React, { Children, ReactElement } from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { Hidden } from '../Hidden/Hidden';
import { StepContext, StepperMode, StepperTone } from './StepperContext';
import { StepProps } from './Step';
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

type StepperProps = {
  label: string;
  children: Array<ReactElement<StepProps>> | ReactElement<StepProps>;
  mode?: StepperMode;
  tone?: StepperTone;
  onStepClick?: (step: { id?: string; stepNumber: number }) => void;
  data?: DataAttributeMap;
  id?: string;
} & (LinearProps | NonLinearProps);

export const Stepper = ({
  activeStep = 0,
  label,
  mode = 'linear',
  tone,
  children,
  data,
  id,
  onStepClick,
  ...props
}: StepperProps) => {
  const steps = flattenChildren(children);
  const stepCount = steps.length;
  const progress = 'progress' in props ? props.progress : 0;
  const activeStepNumber =
    mode !== 'linear' || (activeStep && activeStep < progress)
      ? activeStep
      : progress;

  let stepName = '';
  const stepItems = Children.map(steps, (child, index) => {
    const stepNumber = index + 1;
    const isLast = stepNumber === stepCount;
    const clickable =
      typeof onStepClick === 'function' &&
      stepNumber !== activeStepNumber &&
      (mode !== 'linear' || stepNumber <= progress);

    if (stepNumber === activeStepNumber && typeof child === 'object') {
      stepName = (child.props as StepProps).children;
    }

    return (
      <StepContext.Provider
        value={{
          activeStep: activeStepNumber,
          progress,
          stepNumber,
          mode,
          tone,
          isLast,
          onStepClick: clickable ? onStepClick : null,
        }}
      >
        <Box
          component="li"
          className={isLast ? styles.stretchLastAboveTablet : styles.stretch}
        >
          {child}
        </Box>
      </StepContext.Provider>
    );
  });

  return (
    <Box
      component="nav"
      position="relative"
      aria-label={label}
      id={id}
      {...(data ? buildDataAttributes(data) : undefined)}
    >
      <Box
        component="ol"
        display="flex"
        paddingBottom="medium"
        justifyContent={{ mobile: 'spaceBetween', tablet: 'center' }}
      >
        {stepItems}
      </Box>
      {mode === 'linear' ? (
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
  );
};
