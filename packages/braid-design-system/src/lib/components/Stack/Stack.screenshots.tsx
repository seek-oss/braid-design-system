import React, { type ReactNode, Fragment } from 'react';
import type { ComponentScreenshot } from 'site/types';

import { Box, Stack, Hidden, Heading, Text, Strong } from '../';
import { spaces } from '../../utils/docsHelpers';
import { Placeholder } from '../private/Placeholder/Placeholder';

const Container = ({ children }: { children: ReactNode }) => (
  <Box style={{ maxWidth: '300px' }}>{children}</Box>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768, 992, 1200],
  screenshotOnlyInWireframe: true,
  examples: [
    ...spaces.map((space) => ({
      label: `Space: ${space}`,
      Container,
      Example: () => (
        <Stack space={space}>
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
        </Stack>
      ),
    })),
    {
      label: 'Align to center',
      Container,
      Example: () => (
        <Stack space="gutter" align="center">
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={60} />
          <Placeholder height={40} width={80} />
        </Stack>
      ),
    },
    {
      label: 'Align to right',
      Container,
      Example: () => (
        <Stack space="gutter" align="right">
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={60} />
          <Placeholder height={40} width={80} />
        </Stack>
      ),
    },
    {
      label:
        'Responsive alignment (e.g. center on mobile, left from tablet upwards)',
      Container,
      Example: () => (
        <Stack space="gutter" align={['center', 'left']}>
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={60} />
          <Placeholder height={40} width={80} />
        </Stack>
      ),
    },
    {
      label:
        'Test - Should handle fragments (6 placeholders should be evenly spaced)',
      Container,
      Example: () => (
        <Stack space="small">
          <Fragment>
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Fragment>
              <Placeholder height={40} />
              <Fragment>
                <Placeholder height={40} />
              </Fragment>
            </Fragment>
          </Fragment>
          <Placeholder height={40} />
          <Placeholder height={40} />
        </Stack>
      ),
    },
    {
      label: 'Responsively hiding stack items',
      Container,
      Example: () => (
        <Stack space="gutter">
          <Placeholder height={40} label="1" />
          <Hidden below="tablet">
            <Placeholder height={40} label="2" />
          </Hidden>
          <Hidden above="mobile">
            <Placeholder height={40} label="3" />
          </Hidden>
          <Placeholder height={40} label="4" />
        </Stack>
      ),
    },
    {
      label:
        'Test - Hidden stack items with responsive alignment (should be center aligned showing 4 + 5 + 6 on mobile, right aligned showing 3 + 4 + 5 + 6 on tablet, left aligned showing 2 + 3 + 4 + 6 on desktop, left aligned showing 1 + 2 + 3 + 4 on wide)',
      Container,
      Example: () => (
        <Stack space="gutter" align={['center', 'right', 'left']}>
          <Hidden below="wide">
            <Placeholder width={40} height={40} label="1" />
          </Hidden>
          <Hidden below="desktop">
            <Placeholder width={40} height={40} label="2" />
          </Hidden>
          <Hidden below="tablet">
            <Placeholder width={40} height={40} label="3" />
          </Hidden>
          <Hidden print>
            <Placeholder width={40} height={40} label="4" />
          </Hidden>
          <Hidden above="tablet">
            <Placeholder width={40} height={40} label="5" />
          </Hidden>
          <Hidden above="desktop">
            <Placeholder width={40} height={40} label="6" />
          </Hidden>
          <Hidden screen>
            <Placeholder
              width={40}
              height={40}
              label="This should not be visible"
            />
          </Hidden>
        </Stack>
      ),
    },
    {
      label: 'Test - Span align to left',
      Container,
      Example: () => (
        <Stack component="span" space="gutter">
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
        </Stack>
      ),
    },
    {
      label: 'Test - Span align to center',
      Container,
      Example: () => (
        <Stack component="span" space="gutter" align="center">
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={60} />
          <Placeholder height={40} width={80} />
        </Stack>
      ),
    },
    {
      label: 'Test - Span align to right',
      Container,
      Example: () => (
        <Stack component="span" space="gutter" align="right">
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={60} />
          <Placeholder height={40} width={80} />
        </Stack>
      ),
    },
    {
      label: 'Test - Default text alignment (left)',
      Container,
      Example: () => (
        <Stack space="large" align="left">
          <Heading level="3">Default heading alignment (left).</Heading>
          <Text>
            <Strong>Default text alignment (left).</Strong> Est quis incididunt
            do laboris eiusmod et..
          </Text>
          <Text align="right">
            <Strong>Explicit right alignment.</Strong> Pariatur ad aute esse
            esse sunt aliqua.
          </Text>
        </Stack>
      ),
    },
    {
      label: 'Test - Default text alignment (center)',
      Container,
      Example: () => (
        <Stack space="large" align="center">
          <Heading level="3">Default heading alignment (center).</Heading>
          <Text>
            <Strong>Default text alignment (center).</Strong> Est quis
            incididunt do laboris eiusmod et..
          </Text>
          <Text align="right">
            <Strong>Explicit right alignment.</Strong> Pariatur ad aute esse
            esse sunt aliqua.
          </Text>
        </Stack>
      ),
    },
    {
      label: 'Test - Default text alignment (right)',
      Container,
      Example: () => (
        <Stack space="large" align="right">
          <Heading level="3">Default heading alignment (right).</Heading>
          <Text>
            <Strong>Default text alignment (right).</Strong> Est quis incididunt
            do laboris eiusmod et..
          </Text>
          <Text align="center">
            <Strong>Explicit center alignment.</Strong> Pariatur ad aute esse
            esse sunt aliqua.
          </Text>
        </Stack>
      ),
    },
  ],
};
