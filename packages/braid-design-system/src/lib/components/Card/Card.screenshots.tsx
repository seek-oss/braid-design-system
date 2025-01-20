import React from 'react';
import type { ComponentScreenshot } from 'site/types';

import { Box, Card, Stack, Text } from '../';
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
    {
      label: 'Height full',
      Example: () => (
        <Box style={{ height: 300 }}>
          <Card height="full">
            <Placeholder height={60} />
          </Card>
        </Box>
      ),
    },
    {
      label: 'Height content (default)',
      Example: () => (
        <Box style={{ height: 300 }}>
          <Card height="content">
            <Placeholder height={60} />
          </Card>
        </Box>
      ),
    },
    {
      label: 'Test: should be left aligned in a centered Stack',
      Example: () => (
        <Stack space="large" align="center">
          <Card height="content">
            <Text>
              Enim elit eu et culpa non esse voluptate labore in ea. Incididunt
              irure aliquip cillum occaecat irure.
            </Text>
          </Card>
        </Stack>
      ),
    },
  ],
};
