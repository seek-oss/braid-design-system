import { createContext } from 'react';
import * as styles from './Stepper.css';

export type StepperMode = 'linear' | 'non-linear';
export type StepperTone = Exclude<keyof typeof styles.tone, 'formAccent'>;

interface StepContextValues {
  stepNumber: number;
  activeStep: number;
  progress: number;
  mode: StepperMode;
  tone?: StepperTone;
  isLast: boolean;
  onStepClick: ((step: { id?: string; stepNumber: number }) => void) | null;
}

export const StepContext = createContext<StepContextValues>({
  activeStep: 0,
  stepNumber: 0,
  progress: 0,
  mode: 'linear',
  isLast: false,
  onStepClick: null,
});
