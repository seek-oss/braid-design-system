import source from '@braid-design-system/source.macro';

import { Stepper, Step } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Default',
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
    description: 'Non-linear',
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
    description: 'Neutral',
    code: source(
      <Stepper label="Linear steps" tone="neutral" progress={3}>
        <Step>1. First step</Step>
        <Step>2. Second step</Step>
        <Step>3. Third step</Step>
        <Step>4. Forth step</Step>
      </Stepper>,
    ),
  },
  {
    description: 'Left aligned',
    code: source(
      <Stepper label="Linear steps" align="left" progress={3}>
        <Step>1. First step</Step>
        <Step>2. Second step</Step>
        <Step>3. Third step</Step>
        <Step>4. Forth step</Step>
      </Stepper>,
    ),
  },
];
