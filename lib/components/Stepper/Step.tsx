import clsx from 'clsx';
import React, { useContext } from 'react';
import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';
import { Hidden } from '../Hidden/Hidden';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import { StepContext } from './StepperContext';
import * as styles from './Stepper.css';

interface StepIndicatorProps {
  complete?: boolean;
  active?: boolean;
  started?: boolean;
}

const StepIndicator = ({ complete, started, active }: StepIndicatorProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    focusable="false"
    viewBox="0 0 24 24"
    className={clsx(
      styles.indicator,
      complete || active || started ? styles.highlight : undefined,
      complete && !active ? styles.complete : undefined,
      active ? styles.active : undefined,
    )}
  >
    <circle
      fill="none"
      stroke="currentColor"
      strokeWidth={4}
      cx={12}
      cy={12}
      r={10}
    />
    <circle cx={12} cy={12} r={5} className={styles.inner} />
    <path
      d="M 18.26 7.64 C 17.94 7.32 17.46 7.32 17.14 7.64 L 9.7 15.08 L 7.06 12.44 C 6.74 12.12 6.26 12.12 5.94 12.44 S 5.62 13.24 5.94 13.56 L 9.14 16.76 C 9.3 16.92 9.46 17 9.7 17 S 10.1 16.92 10.26 16.76 L 18.26 8.76 C 18.58 8.44 18.58 7.96 18.26 7.64 Z"
      className={styles.tick}
    />
  </svg>
);

export interface StepProps {
  children: string;
  complete?: boolean;
  id?: string;
}

export const Step = ({ complete = false, id, children }: StepProps) => {
  const { activeStep, tone, mode, stepNumber, onStepClick, isLast, progress } =
    useContext(StepContext);

  const linear = mode === 'linear';
  const active = stepNumber === activeStep;
  const completed = complete || (linear && stepNumber < progress);
  const started = active || complete || (linear && stepNumber <= progress);

  return (
    <Box
      component="li"
      position="relative"
      aria-current={active ? 'step' : undefined}
      className={[
        styles.step,
        styles.tone[tone || 'formAccent'],
        isLast ? styles.stretchLastAboveTablet : styles.stretch,
      ]}
      cursor={onStepClick ? 'pointer' : undefined}
      onClick={onStepClick ? () => onStepClick({ id, stepNumber }) : undefined}
      tabIndex={active ? 0 : undefined}
      outline="none"
    >
      {!isLast ? (
        <Box
          component="span"
          position="absolute"
          overflow="hidden"
          borderRadius="full"
          className={styles.progressTrack}
        >
          <Box
            component="span"
            position="absolute"
            top={0}
            bottom={0}
            width="full"
            className={[
              styles.progressLine,
              !linear || progress <= stepNumber
                ? styles.progressUnfilled
                : undefined,
            ]}
          />
        </Box>
      ) : null}
      <Stack
        component="span"
        space="medium"
        align={{ mobile: 'left', tablet: 'center' }}
      >
        <Box
          component="span"
          position="relative"
          transition="fast"
          className={styles.indicatorContainer}
          aria-hidden
        >
          <FieldOverlay
            variant="focus"
            borderRadius="full"
            onlyVisibleForKeyboardNavigation
            className={styles.focusOverlay}
          />
          <StepIndicator
            complete={completed}
            active={active}
            started={started}
          />
        </Box>
        <Hidden component="span" below="tablet">
          <Box component="span" paddingX="xsmall" userSelect="none">
            <Text
              align="center"
              weight={started ? 'strong' : undefined}
              tone={!started ? 'secondary' : undefined}
            >
              {children}
            </Text>
          </Box>
        </Hidden>
      </Stack>
    </Box>
  );
};
