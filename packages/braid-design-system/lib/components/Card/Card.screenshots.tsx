import React from 'react';
import { ComponentScreenshot } from '../../../../../site/src/types';
import { Card } from '../';
import { Placeholder } from '../../playroom/components';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768, 992, 1200],
  examples: [
    {
      label: 'Default',
      Example: () => (
        <Card>
          <Placeholder height={100} />
        </Card>
      ),
    },
    {
      label: 'Tone - Promote',
      Example: () => (
        <Card tone="promote">
          <Placeholder height={100} />
        </Card>
      ),
    },
    {
      label: 'Tone - FormAccent',
      Example: () => (
        <Card tone="formAccent">
          <Placeholder height={100} />
        </Card>
      ),
    },
    {
      label: 'Rounded - default',
      Example: () => (
        <Card>
          <Placeholder height={100} />
        </Card>
      ),
    },
    {
      label: 'Rounded - true',
      Example: () => (
        <Card rounded>
          <Placeholder height={100} />
        </Card>
      ),
    },
    {
      label: 'RoundedAbove - mobile',
      Example: () => (
        <Card roundedAbove="mobile">
          <Placeholder height={100} />
        </Card>
      ),
    },
    {
      label: 'RoundedAbove - tablet',
      Example: () => (
        <Card roundedAbove="tablet">
          <Placeholder height={100} />
        </Card>
      ),
    },
    {
      label: 'RoundedAbove - desktop',
      Example: () => (
        <Card roundedAbove="desktop">
          <Placeholder height={100} />
        </Card>
      ),
    },
    {
      label: 'Tone & rounded',
      Example: () => (
        <Card tone="formAccent" rounded>
          <Placeholder height={100} />
        </Card>
      ),
    },
  ],
};
