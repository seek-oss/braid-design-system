import React from 'react';
import { Rating, Stack, Text } from '../';
import type { ComponentScreenshot } from 'site/types';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Example: () => <Rating rating={3} />,
    },
    {
      label: 'Variant: starsOnly',
      Example: () => <Rating rating={4.2} variant="starsOnly" />,
    },
    {
      label: 'Variant: minimal',
      Example: () => <Rating rating={3.7} variant="minimal" />,
    },
    {
      label: 'large',
      Example: () => <Rating rating={3} size="large" />,
    },
    {
      label: 'small',
      Example: () => <Rating rating={2} size="small" />,
    },
    {
      label: 'xsmall',
      Example: () => <Rating rating={1.5} size="xsmall" />,
    },
    {
      label: 'Fill test',
      Example: () => (
        <Stack space="medium">
          <Text>Empty</Text>
          <Rating rating={0} />
          <Rating rating={0.01} />
          <Rating rating={0.24} />
          <Text>Half</Text>
          <Rating rating={0.25} />
          <Rating rating={0.74} />
          <Text>Full</Text>
          <Rating rating={0.75} />
          <Rating rating={0.99} />
          <Rating rating={1} />
        </Stack>
      ),
    },
    {
      label: 'Rating Contrast',
      Example: () => (
        <BackgroundContrastTest>
          <Rating rating={1.5} size="xsmall" />
        </BackgroundContrastTest>
      ),
    },
  ],
};
