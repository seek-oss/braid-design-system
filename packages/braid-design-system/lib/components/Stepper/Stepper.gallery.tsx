import React from 'react';
import type { ComponentExample } from 'site/types';
import { Stepper, Step } from '../';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Linear',
    Example: () =>
      source(
        <Stepper label="Linear steps" progress={3}>
          {[
            '1. First step',
            '2. Second step',
            '3. Third step',
            '4. Fourth step',
          ].map((step) => (
            <Step key={step}>{step}</Step>
          ))}
        </Stepper>,
      ),
  },
  {
    label: 'Non-linear',
    Example: () =>
      source(
        <Stepper mode="non-linear" label="Non-linear steps" activeStep={2}>
          {[
            '1. First step',
            '2. Second step',
            '3. Third step',
            '4. Fourth step',
          ].map((step, index) => (
            <Step key={step} complete={index === 3}>
              {step}
            </Step>
          ))}
        </Stepper>,
      ),
  },
  {
    label: 'Neutral',
    Example: () =>
      source(
        <Stepper tone="neutral" label="Neutral stepper" progress={3}>
          {[
            '1. First step',
            '2. Second step',
            '3. Third step',
            '4. Fourth step',
          ].map((step) => (
            <Step key={step}>{step}</Step>
          ))}
        </Stepper>,
      ),
  },
  {
    label: 'Left Aligned',
    Example: () =>
      source(
        <Stepper align="left" label="Left aligned stepper" progress={3}>
          {[
            '1. First step',
            '2. Second step',
            '3. Third step',
            '4. Fourth step',
          ].map((step) => (
            <Step key={step}>{step}</Step>
          ))}
        </Stepper>,
      ),
  },
];
