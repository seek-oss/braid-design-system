import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Card } from '../';
import { Placeholder } from '../../playroom/components';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768],
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
      label: 'Tone - Info',
      Example: () => (
        <Card tone="info">
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
      label: 'Radius - none',
      Example: () => (
        <Card radius="none">
          <Placeholder height={100} />
        </Card>
      ),
    },
    {
      label: 'Radius - standard',
      Example: () => (
        <Card radius="standard">
          <Placeholder height={100} />
        </Card>
      ),
    },
    {
      label: 'Radius - standard above mobile',
      Example: () => (
        <Card radius={['none', 'standard']}>
          <Placeholder height={100} />
        </Card>
      ),
    },
    {
      label: 'Radius - standard below tablet',
      Example: () => (
        <Card radius={['standard', 'none']}>
          <Placeholder height={100} />
        </Card>
      ),
    },
    {
      label: 'Tone & radius',
      Example: () => (
        <Card tone="formAccent" radius="standard">
          <Placeholder height={100} />
        </Card>
      ),
    },
  ],
};
