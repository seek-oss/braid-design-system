import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Stepper, Step } from '../';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768],
  examples: [
    {
      label: 'Linear',
      Example: () => (
        <Stepper label="Linear steps" progress={3}>
          <Step>1. First step</Step>
          <Step>2. Second step</Step>
          <Step>3. Third step</Step>
          <Step>4. Forth step</Step>
        </Stepper>
      ),
    },
    {
      label: 'Non-linear',
      Example: () => (
        <Stepper mode="non-linear" label="Non-linear steps" activeStep={2}>
          <Step>1. First step</Step>
          <Step>2. Second step</Step>
          <Step>3. Third step</Step>
          <Step complete>4. Forth step</Step>
        </Stepper>
      ),
    },
    {
      label: 'Neutral',
      Example: () => (
        <Stepper label="Linear steps" tone="neutral" progress={3}>
          <Step>1. First step</Step>
          <Step>2. Second step</Step>
          <Step>3. Third step</Step>
          <Step>4. Forth step</Step>
        </Stepper>
      ),
    },
  ],
};
