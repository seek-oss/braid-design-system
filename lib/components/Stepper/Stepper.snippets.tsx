import React from 'react';
import { Snippets } from '../private/Snippets';
import { Stepper, Step } from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
  {
    name: 'Default',
    code: source(
      <Stepper label="Linear steps" progress={3}>
        <Step>1. First step</Step>
        <Step>2. Second step</Step>
        <Step>3. Third step</Step>
        <Step>4. Forth step</Step>
      </Stepper>,
    ),
  },
  {
    name: 'Non-linear',
    code: source(
      <Stepper mode="non-linear" label="Non-linear steps" activeStep={2}>
        <Step>1. First step</Step>
        <Step>2. Second step</Step>
        <Step>3. Third step</Step>
        <Step complete>4. Forth step</Step>
      </Stepper>,
    ),
  },
  {
    name: 'Neutral',
    code: source(
      <Stepper label="Linear steps" tone="neutral" progress={3}>
        <Step>1. First step</Step>
        <Step>2. Second step</Step>
        <Step>3. Third step</Step>
        <Step>4. Forth step</Step>
      </Stepper>,
    ),
  },
];
